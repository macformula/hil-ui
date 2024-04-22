import { HStack, Text, Spacer } from '@chakra-ui/react';
import { TailSpin } from "react-loader-spinner";

// Define the props type for the component
interface TestProps {
  UUID: string;
  id: number;
  name: string;
  date: string;
}

const formulaRed = "#AA1F26";
// const runningBlue = "#007BFF";

const Test: React.FC<TestProps> = ({ UUID, id, name, date }) => {
  return (
    <HStack bgColor="white" w="100%" p="2.5" justify="space-between">
      {date && (<Text fontSize="12px" display={{ base: "none", md: "flex" }}>{date}:</Text>)}
      <Text size="sm">{name} - {UUID}</Text>
      <Spacer />
      {id==1 ? 
        (<TailSpin color={formulaRed} strokeWidth={4} height={30} width={30} radius={5} />) :
        (<Text textColor={formulaRed}>Queue #{id-1}</Text>)
      }
    </HStack>
  );
};

export default Test;
