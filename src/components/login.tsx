// @ts-nocheck
// import React from 'react';
import { Box, Flex, Heading, Image, HStack, VStack, Input, Icon, Text, Checkbox, Spacer, Button, Link as ChakraLink, Divider} from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import bitmapImage from "../assets/formula-bitmap.png"
import { FaGithub, FaWrench } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Update, { Status } from './patch_notes/update';

const formulaRed = "#AA1F26"

//all patch notes and updates text to alert members
const updatesData = [
  {
    text: "New Website UI is up and running.",
    date: "2024-03-22",
    status: Status.Green,
  },
  {
    text: "There seems to be a slight problem with running CAN tests, we are currently fixing the issue.",
    date: "2024-03-21",
    status: Status.Orange,
  },
  {
    text: "Everything is cooked, the website will be fixed as soon as possible. 🙇‍♂️",
    date: "2024-03-20",
    status: Status.Red,
  },
  {
    text: "The website is up and running!",
    date: "2024-03-12",
    status: Status.Green,
  },
];

const Login = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleContinue = () => {
        // Perform any necessary logic before navigating
        // For now, just navigate to the "/dashboard" route
        navigate('/hil');
    };

  return (
    <div>
      <Flex h="100vh" bgColor="#F9F4F4" alignItems="center" justifyItems="center" position="relative">
        <HStack p="5" bgColor="white" w="100%" h="95%" borderRadius="10px" mx={{base: "16px", sm:"28px", md:"40px", lg:"60px", xl: "96px"}}>
          <Box bgColor="#F9F4F4"  h="100%" w={{md:"40%", lg:"50%"}} display={{base:"none", lg:"flex"}} borderRadius="10px" alignItems="flex-end" overflow="hidden" >
            <Image h="55vw" src={bitmapImage} objectFit="cover" borderRadius="10px" />
          </Box>
          <VStack h="100%" w="100%"className="logo-text" mt="20px" spacing="10px">
            <HStack h="7%" mb="30px">
              <Image h="100%" src={logo} />
              <Heading size={{base:"md", lg:"lg"}} textColor={formulaRed}>HIL Interface</Heading>
            </HStack>
            <Heading as='h1' size={{base:"3xl", lg:"4xl"}} mb="10px">Welcome Back</Heading>
            <Text w={{base:"90%", md:"70%"}} >Here are the latest updates on the HIL interface. Website not functioning correctly? Contact <ChakraLink textColor="#3E92CC" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>Hady Ibrahim.</ChakraLink></Text>
            <Divider w={{base:"90%", md:"70%"}} colorScheme="blackAlpha" />
            <Box w={{base:"90%", md:"70%"}} h="40%" bgColor="white" overflowY="scroll" mb="20px" >
            {updatesData.map((update, index) => (
              <Update key={index} {...update} />
            ))}
            </Box>
            <Button isDisabled={true} w={{base:"90%", md:"70%"}}  leftIcon={<FaGithub/>} bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} >Sign In with Github</Button>
            <Button w={{base:"90%", md:"70%"}}  onClick={handleContinue} leftIcon={<FaWrench/>} bgColor="black" textColor="white" _hover={{backgroundColor:"gray"}} >Continue</Button>
          </VStack>
        </HStack>
      </Flex>  
    </div>
  );
};

export default Login;