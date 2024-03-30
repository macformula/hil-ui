// @ts-nocheck
import { Icon, Text, HStack, Spacer } from "@chakra-ui/react";
import { color } from "framer-motion";
import { GrStatusGoodSmall, GrStatusUnknownSmall, GrStatusCriticalSmall } from "react-icons/gr";


export enum Status {
    Green = "Notification",
    Orange = "Warning",
    Red = "Caution",
  }


  interface UpdateProps {
    text: string;
    date: string;
    status: Status;
  }


  const Update: React.FC<UpdateProps> = ({ text, date, status }) => {
    // Determine the symbol to display based on the status
    const statusSymbol = (() => {
      switch (status) {
        case Status.Green:
          return <Icon as={GrStatusGoodSmall} color="green" mt="2" boxSize={2} />;
        case Status.Orange:
          return <Icon as={GrStatusUnknownSmall} color="orange" mt="2" boxSize={2} />;
        case Status.Red:
          return <Icon as={GrStatusCriticalSmall} color="red" mt="2" boxSize={2} />;
        default:
          return null;
      }
    })();
  
    return (
        <HStack p="4" justifyContent="space-between" alignItems="flex-start"> 
            { statusSymbol }
            <Text textAlign="left">{text}</Text>
            <Spacer/>
            <Text display={{base:"none", md:"block"} } textColor="gray">{date}</Text>
        </HStack>
    );
  };
  
  export default Update;
  