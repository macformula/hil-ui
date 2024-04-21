// @ts-nocheck

import React, { useState } from 'react';
import { VStack, Select, Input, Button, Text, HStack, StepStatus, useToast } from '@chakra-ui/react';
import Tests from '../sub-components/tests';
import { useWebSocketTest } from '../../api/ws-Test'; 
import { useWebSocketStatus } from '../../api/ws-Status';
import TestStatus from "../sub-components/ochestrator_state"

interface Sequence {
    Name: string;
    Desc: string;
    States: any[];
}

interface StateData {
    SleepTime: number | null;
}

interface TestProgress {
    CurrentState: StateData | null;
    StateIndex: number;
    Sequence: {
        Name: string;
        Desc: string;
        States: StateData[] | null;  
    };
    StatePassed: boolean[] | null;  
    StateDuration: number[] | null; 
}

interface TestData {
    OrchestratorState: number;
    TestId: string;
    Progress: TestProgress;
    QueueLength: number;
    FatalError: boolean | null;
}

const jsonData  = {
    "OrchestratorState": 1,
    "TestId": "00000000-0000-0000-0000-000000000000",
    "Progress": {
        "CurrentState": null,
        "StateIndex": 0,
        "Sequence": {
            "Name": "",
            "Desc": "",
            "States": null
        },
        "StatePassed": null,
        "StateDuration": null
    },
    "QueueLength": 1,
    "FatalError": null
}

const Dashboard: React.FC = () => {
    const [sequences, setSequences] = useState<Sequence[]>([]);
    const [test, setTest] = useState<TestData>(jsonData); // Holds a temp TestData object
    const toast = useToast()
    const [selectedSequenceIndex, setSelectedSequenceIndex] = useState<string | undefined>(undefined);
    const { sendMessage } = useWebSocketTest(setSequences); 
    const formulaRed = "#AA1F26";

    useWebSocketStatus(setTest);  
    const sequencesDropdown = sequences.map((item, index) => (
        <option key={index} value={index.toString()}>
            {item.Name}
        </option>
    ));

    const handleRunTestClick = () => {
      if (selectedSequenceIndex !== undefined) {
        const message = {
          "task": "start",
          "parameter": selectedSequenceIndex
        };
        sendMessage(message);
        console.log("sent:", JSON.stringify(message));
        toast({
            title: 'Test Sent!',
            description: "Your test will take 1-2 minutes to load.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
      } else {
        console.log("No sequence selected");
        toast({
            title: 'Please Select a Option',
            description: "Not seeing your option? Contact ___ to get it resolved.",
            status: 'warning',
            duration: 9000,
            isClosable: true,
        })
      }
    };

    return (
      <VStack h="100vh" p="3">
            <VStack w="100%" bgColor="#F9F4F4" p="3" spacing="3">
                <Tests />
                <HStack w="100%" justifyContent={{ base: "start", md: "space-between" }} flexWrap={{ base: "wrap", md: "nowrap" }} spacing="3">
                    <VStack w={{ base: "100%", md: "49%" }} h={{ base: "auto", md: "100%" }}bgColor="white" p="5" align="right">
                        <Text>Orchestrator Status</Text>
                        <TestStatus data={test}/>
                    </VStack>
                    <VStack w={{ base: "100%", md: "49.8%" }} bgColor="white" p="3">
                        <Select variant="flushed" placeholder='Select a Sequence' focusBorderColor="black" onChange={(e) => setSelectedSequenceIndex(e.target.value)}>
                            {sequencesDropdown}
                        </Select>
                        <Input variant="flushed" focusBorderColor="black" placeholder='Input Metadata'></Input>
                        <Button onClick={handleRunTestClick} w="100%" bgColor="black" textColor="white" borderRadius={0} _hover={{ backgroundColor: "#4c4c4c" }}>Run Test</Button>
                        <Button isDisabled={true} w="100%" bgColor="black" textColor="white" borderRadius={0} _hover={{ backgroundColor: "#4c4c4c" }}>Recover</Button>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Dashboard;
