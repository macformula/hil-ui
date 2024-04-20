// @ts-nocheck

import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react'

interface StateData {
    SleepTime: number | null;
}

interface Sequence {
    Name: string;
    Desc: string;
    States: StateData[] | null;
}

interface TestProgress {
    CurrentState: StateData | null;
    StateIndex: number;
    Sequence: Sequence;
    StatePassed: boolean[] | null;
    StateDuration: number[] | null;
}

interface TestData {
    OrchestratorState: number;
    TestId: string;
    Progress: TestProgress;
    QueueLength: number;
    FatalError: any;  // Adjusting the type here to match your provided input JSON structure
}

const TestStatus = ({ data }: { data: TestData }) => {
    const { Progress, FatalError } = data;
    const { Sequence, StateIndex, StatePassed, StateDuration } = Progress;
    const formulaRed = "#AA1F26";
    const isProcessing = !StatePassed || !StateDuration || Progress.Sequence.States?.length === 0;
    const showError = Boolean(FatalError);

    return (
        <VStack spacing={2} align="stretch">
            {!isProcessing && !showError && (
                <>
                    <Text fontFamily="Consolas" fontSize="16" fontWeight="bold">Name: {Sequence.Name || "N/A"}</Text>
                    <Text fontFamily="Consolas" fontSize="14" textColor="gray">Desc: {Sequence.Desc || "N/A"}</Text>
                </>
            )}
            {isProcessing ? (
                <Box bg={formulaRed} p={3}>
                    <Flex align="center"> 
                        <Spinner color="white" speed="0.9s" size="xs" mr={3} /> 
                        <Text color="white">Waiting for a response from the server.</Text>
                    </Flex>
                </Box>
            ) : Sequence.States && StatePassed && StateDuration && Sequence.States.length > 0 ? (
                Sequence.States.map((state, index) => {
                    let color = "gray";
                    let label = `State ${index + 1}: `;
                    if (index < StateIndex) {
                        color = StatePassed[index] ? "green" : "red";
                        label += StatePassed[index] ? "Passed" : "Failed";
                        label += ` (${(StateDuration[index] / 1000000).toFixed(2)}s)`;
                    } else if (index === StateIndex) {
                        if (StatePassed.length > index && StatePassed[index]) {
                            color = "green";
                            label += "Passed";
                            label += ` (${(StateDuration[index] / 1000000).toFixed(2)}s)`;
                        } else {
                            color = "blue";
                            label += "Current state";
                        }
                    }

                    return (
                        
                        <Text key={index} color={color}>
                            {label}
                        </Text>
                    );
                })
            ) : null}

            {showError && (
                <Box bg="red.500" p={4}>
                    <Text color="white">A fatal error has occurred, please reset the pi.</Text>
                </Box>
            )}
        </VStack>
    );
};

export default TestStatus;
