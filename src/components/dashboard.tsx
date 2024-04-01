import { useEffect, useState } from 'react';
import { Heading, Image, HStack, VStack, Input, Text, Button, Select, IconButton, Spacer } from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import { MdOutlineExitToApp, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Tests from './testruns/tests'
const formulaRed = "#AA1F26"

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleContinue = () => {
        // Perform any necessary logic before navigating
        // For now, just navigate to the "/dashboard" route
        navigate('/');
    };

    useEffect(() => {
      const ws = new WebSocket(
        "wss://api.macformularacing.com/test"
      );

      ws.onopen = () => {
          console.log("Connection Established!");

          const message = {
            task: "recover",
            parameter: "hi"
          };

          console.log("here1");
          ws.send(JSON.stringify(message))
          console.log("here2")
      };

      ws.onmessage = (event) => {
          console.log("received")
          console.log(event.data);
          return false
      };

      ws.onclose = () => {
        console.log("Connection Closed!");
      };

      ws.onerror = () => {
        console.log("WS Error");
      };
    }, []);

    return (
        <VStack h="100vh" p="3">
            <HStack h="3%" w="100%" justify="space-between">
                <Image h="100%" src={logo} />
                <Heading size={{base:"xs", lg:"sm"}} textColor="black">MAC Formula Electric</Heading>
                <Heading size={{base:"2xs", lg:"sm"}} pl="5%" textColor={formulaRed} display={{base:"none", md:"flex"}}>HIL Interface</Heading>
                <Spacer/>
                <IconButton
                    icon={<MdOutlineExitToApp />}
                    h="100%"
                    aria-label='Exit'
                    bgColor="black"
                    textColor="white"
                    _hover={{ backgroundColor: 'gray' }}
                    onClick={handleContinue}
                />
            </HStack>
            <HStack mt="10px" h="3%" w="100%" justify="space-between">
                <IconButton icon={<MdKeyboardArrowLeft />} h="100%" aria-label='left' variant="ghost"/>
                <Button leftIcon={<MdDashboard color={formulaRed}/>} variant="ghost" bgColor="#F9F4F4" _hover={{bgColor:"#F1E4E4"}} borderRadius="0px">Dashboard</Button>
                <Spacer/>
                <IconButton icon={<MdKeyboardArrowRight />} h="100%" aria-label='left' variant="ghost"/>
            </HStack>
            <VStack w="100%" bgColor="#F9F4F4" p="5" spacing="5">
                <Tests />
                <HStack w="100%" justifyContent={{base:"start", md:"space-between"}} flexWrap={{base:"wrap", md:"nowrap"}} spacing="5">
                    <VStack w={{base:"100%", md:"49%"}} h="100%"bgColor="white" p="5">
                            <Text>Orchestrator Status</Text>
                            
                    </VStack>
                    <VStack w={{base:"100%", md:"49.8%"}} bgColor="white" p="5">
                            <Select variant="flushed" placeholder='Select a Sequence' focusBorderColor="black">

                            </Select>
                            <Input variant="flushed" focusBorderColor="black" placeholder='Input Metadata'></Input>
                            <Button w="100%"  bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} >Run Test</Button>
                            <Button isDisabled={true} w="100%"  bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} >Recover</Button>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Dashboard;
