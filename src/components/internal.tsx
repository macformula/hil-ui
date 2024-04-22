// @ts-nocheck
import { useEffect, useState } from 'react';
import { Heading, Image, HStack, VStack, Input, Text, Button, Select, IconButton, Spacer, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import { MdOutlineExitToApp,MdAnalytics , MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Tests from './sub-components/tests_mock'
import Dashboard from './tabs/dashboard';
import Report from './tabs/report';

const formulaRed = "#AA1F26"
const Internal = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const backToLogin = () => {
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
                    borderRadius={0} 
                    _hover={{backgroundColor:"#4c4c4c"}}
                    textColor="white"
                    onClick={backToLogin}
                    mr="3"
                />
            </HStack>
            <Tabs w="100%" pt="3" position="relative" align='start' variant="unstyled">
              <TabList>
                <Tab>Dashboard</Tab>
                <Tab>Report</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg={formulaRed}
                borderRadius="1px"
              />
              <TabPanels p="0">
                <TabPanel p="0" pt="3">
                  <Dashboard/>
                </TabPanel>
                <TabPanel p="0" pt="3">
                  <Report/>
                </TabPanel>
              </TabPanels>
            </Tabs>
        </VStack>
    );
};

export default Internal;
