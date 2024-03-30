import { HStack, VStack, Input, Text, Button, Select} from '@chakra-ui/react';
import Tests from '../testruns/tests'
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import WebSocketCall from "../../api/WebSocketCall";

const Dashboard = () => {
    const [socketInstance, setSocketInstance] = useState("");
    const [loading, setLoading] = useState(true);
    const [buttonStatus, setButtonStatus] = useState(false);

    useEffect(() => {
        if (true) {
            const socket = io("http://api.macformularacing.com", {
                /* @ts-ignore */
                // cors: {
                //     origin: "http://dev.macformularacing.com",
                // },
            });
            {/* @ts-ignore */}
            setSocketInstance(socket);
        
            socket.on("connect", () => {
                console.log("Socket connected");
                setLoading(false);
                console.log(socket);
            });
        
            socket.on("disconnect", () => {
                console.log("Socket disconnected");
            });
        
            return function cleanup() {
                socket.disconnect();
            };
        }
    }, [buttonStatus]);

    const handleClick = () => {
        if (buttonStatus === false) {
            setButtonStatus(true);
        } else {
            setButtonStatus(false);
        }
    };

        
    // connect();

    const send = () => {
        console.log("1");
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
            <>
            {!buttonStatus ? (
                    <button onClick={handleClick}>turn chat on</button>
                ) : (
                    <div>
                    <button onClick={handleClick}>turn chat off</button>
                    <div className="line">
                        {!loading && <WebSocketCall socket={socketInstance} />}
                    </div>
                    </div>
                )}</>
        </VStack>
    );
};

export default Dashboard;
