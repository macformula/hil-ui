// @ts-nocheck
import { Heading, Image, HStack, VStack, Input, Text, Button, Select, IconButton, Spacer } from '@chakra-ui/react';
import Tests from '../sub-components/tests_mock'

const Report = () => {
    return (
        <VStack h="100%" p="3">
            <VStack w="100%" bgColor="#F9F4F4"  spacing="5">
                <Tests />
            </VStack>
        </VStack>
    );
};

export default Report;
