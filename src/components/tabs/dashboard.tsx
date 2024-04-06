// Dashboard.tsx

import React, { useState } from 'react';
import { VStack, Select, Input, Button, Text, HStack } from '@chakra-ui/react';
import Tests from '../sub-components/tests';
import { useWebSocket } from '../../api/ws-Test'; // Make sure the path is correct

interface Sequence {
    Name: string;
    Desc: string;
    States: any[];
}

const Dashboard: React.FC = () => {
    const [sequences, setSequences] = useState<Sequence[]>([]);
    const [selectedSequenceIndex, setSelectedSequenceIndex] = useState<string | undefined>(undefined);
    const { sendMessage } = useWebSocket(setSequences); 

    useWebSocket(setSequences);

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
      } else {
        console.log("No sequence selected");
      }
    };

    return (
      <VStack h="100vh" p="3">
            <VStack w="100%" bgColor="#F9F4F4" p="3" spacing="3">
                <Tests />
                <HStack w="100%" justifyContent={{ base: "start", md: "space-between" }} flexWrap={{ base: "wrap", md: "nowrap" }} spacing="3">
                    <VStack w={{ base: "100%", md: "49%" }} h="100%" bgColor="white" p="5">
                        <Text>Orchestrator Status</Text>
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
