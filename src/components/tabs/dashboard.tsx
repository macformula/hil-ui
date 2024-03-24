import { HStack, VStack, Input, Text, Button, Select} from '@chakra-ui/react';
import Tests from '../testruns/tests'
import { connect, sendMsg} from '../../api/websocket';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
    const socket = new WebSocket("ws://api.macformularacing.com/starttest");

    socket.onopen = () => {
        console.log("WebSocket connection established successfully");
    };
    
    socket.onerror = (error) => {
        console.error("WebSocket connection error:", error);
    };
    
    socket.onclose = (event) => {
        console.log("WebSocket connection closed:", event);
    };
        
    // connect();

    function send(): void {
        console.log("1");
        sendMsg(1);
    }

    return (
        <VStack h="100%" p="3">
            <VStack w="100%" bgColor="#F9F4F4" spacing="5">
                <Tests />
                <HStack w="100%" h="100%" justifyContent={{base:"start", md:"space-between"}} flexWrap={{base:"wrap", md:"nowrap"}} align="top" spacing="5">
                    <VStack w={{base:"100%", md:"49%"}} h="100%" bgColor="white" p="5">
                            <Text>Orchestrator Status</Text>
                            
                    </VStack>
                    <VStack w={{base:"100%", md:"49.8%"}} bgColor="white" p="5">
                            <Select variant="flushed" placeholder='Select a Sequence' focusBorderColor="black">

                            </Select>
                            <Input variant="flushed" focusBorderColor="black" placeholder='Input Metadata'></Input>
                            <Button w="100%"  bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} onClick={send} >Run Test</Button>
                            <Button isDisabled={true} w="100%"  bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} >Recover</Button>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Dashboard;
