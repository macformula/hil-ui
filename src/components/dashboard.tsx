import React from 'react';
import { Box, Flex, Heading, Image, HStack, VStack, Input, Text, Checkbox, Button, Select, IconButton, Spacer, Divider, Spinner} from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import { MdOutlineExitToApp, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const formulaRed = "#AA1F26"

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleContinue = () => {
        // Perform any necessary logic before navigating
        // For now, just navigate to the "/dashboard" route
        navigate('/');
    };
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
        <VStack  w="100%" bgColor="#F9F4F4" p="5" spacing="5">
            <VStack className="dispatcher" w="100%" bgColor="white" overflowY="scroll" >
                <HStack bgColor="white" w="100%" h="90%" p="2.5" justify="space-between">
                    <Text fontFamily="Geist Mono" fontSize="12px" display={{base:"none", md:"flex"}}>01/29/23:</Text>
                    <Text fontFamily="Geist Mono" size="sm">Test 3</Text>
                    <Spacer/>
                    <Text fontFamily="Geist Mono" pr="2.5">Running</Text>
                    <Text fontFamily="Geist Mono" textColor={formulaRed}>Cancel</Text>
                </HStack>
                <Divider w="98%" bgColor="black"/>
                <HStack bgColor="white" w="100%" h="90%" p="2.5" justify="space-between">
                    <Text fontFamily="Geist Mono" fontSize="12px" display={{base:"none", md:"flex"}}>01/29/23:</Text>
                    <Text fontFamily="Geist Mono" size="sm">Test 2</Text>
                    <Spacer/>
                    <Text fontFamily="Geist Mono" pr="2.5"><Spinner size='xs' mr="2.5"/>In Queue</Text>
                    <Text fontFamily="Geist Mono" textColor={formulaRed}>Cancel</Text>
                </HStack>
                <Divider w="98%" bgColor="black"/>

                <HStack bgColor="white" w="100%" h="90%" p="2.5" justify="space-between">
                    <Text fontFamily="Geist Mono" fontSize="12px" display={{base:"none", md:"flex"}}>01/29/23:</Text>
                    <Text fontFamily="Geist Mono" size="sm">Test 1</Text>
                    <Spacer/>
                    <Text fontFamily="Geist Mono" pr="2.5">Completed</Text>
                    <Text fontFamily="Geist Mono" textColor={formulaRed}>✔</Text>
                </HStack>
            </VStack>
            <HStack w="100%" justifyContent={{base:"start", md:"space-between"}} flexWrap={{base:"wrap", md:"nowrap"}} spacing="5">
                <VStack w={{base:"100%", md:"49%"}} h="100%"bgColor="white" p="5">
                        <Text>Orchestrator Status</Text>
                        
                </VStack>
                <VStack w={{base:"100%", md:"49.8%"}} bgColor="white" p="5">
                        <Select variant="flushed" placeholder='Select a Sequence' focusBorderColor="black" >
                            <option value="sequence1">Sequence 1</option>
                            <option value="sequence2">Sequence 2</option>
                            <option value="sequence3">Sequence 3</option>
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