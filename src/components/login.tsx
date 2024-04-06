// import React from 'react';
import { Box, Flex, Heading, Image, HStack, VStack, Input, Text, Checkbox, Button, Link, Divider} from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import bitmapImage from "../assets/formula-bitmap.png"
import { FaGithub, FaWrench } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Update, { Status }  from './sub-components/patch_notes';



const formulaRed = "#AA1F26"

const Login = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleContinue = () => {
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
            <Text w={{base:"90%", md:"70%"}}   mb="10px" >Here are the latest updates on the HIL interface. Website not functioning correctly, contact <Link textColor="#3E92CC" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>Hady Ibrahim.</Link></Text>
            <Box w={{base:"90%", md:"70%"}} h="30%" mb="20px" >
              <Divider/>
              <Box h="100%" w="100%" overflowY="scroll">
              <Update text="Update 1:" date="2024-04-06" status= {Status.Green} />
              <Update text="Update 2" date="2024-04-07" status={Status.Orange} />
              <Update text="Update 3" date="2024-04-08" status={Status.Red} />
              <Update text="Update 1" date="2024-04-06" status= {Status.Green} />
              <Update text="Update 2" date="2024-04-07" status={Status.Orange} />
              <Update text="Update 3" date="2024-04-08" status={Status.Red} />
              </Box>
              <Divider/>
            </Box>
            <Button w={{base:"90%", md:"70%"}}  leftIcon={<FaGithub/>} bgColor="black" textColor="white" borderRadius={0} _hover={{backgroundColor:"#4c4c4c"}} >Sign In with Github</Button>
            <Button w={{base:"90%", md:"70%"}}  onClick={handleContinue} leftIcon={<FaWrench/>} bgColor="black" textColor="white" borderRadius={0} _hover={{backgroundColor:"#4c4c4c"}} >Continue</Button>
          </VStack>
        </HStack>
      </Flex>  
    </div>
  );
};

export default Login;