import { HStack, Text, Spacer, Button } from '@chakra-ui/react';

// Define the status enum
export enum Status {
  Success = "Success",
  Running = "Running",
  Failed = "Failed",
  Queued = "Queued"
}

// Define the props type for the component
interface TestProps {
  name: string;
  date: string;
  status: Status;
}

const formulaRed = "#AA1F26";
// const runningBlue = "#007BFF";

const Test: React.FC<TestProps> = ({ name, date, status }) => {
  // Determine the symbol to display based on the status
  const statusSymbol = (() => {
    switch (status) {
      case Status.Success:
        return <Text textColor="green">✔</Text>;
      case Status.Failed:
        return <Text textColor={formulaRed}>✖</Text>;
      case Status.Running:
        // return <Button size="xs" colorScheme="red">Cancel</Button>;
        return <Text textColor={formulaRed}>Cancel</Text>;
      default:
        return null;
    }
  })();

  return (
    <HStack bgColor="white" w="100%" h="90%" p="2.5" justify="space-between">
      <Text fontSize="12px" display={{ base: "none", md: "flex" }}>{date}:</Text>
      <Text size="sm">{name}</Text>
      <Spacer />
      <Text pr="2.5">{status}</Text>
      {statusSymbol}
    </HStack>
  );
};

export default Test;
