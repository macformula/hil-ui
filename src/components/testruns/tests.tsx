import { VStack} from '@chakra-ui/react';
import Test, { Status } from './test'

const Tests = () => {
  return (
    <VStack fontFamily="Consolas" className="dispatcher" w="100%" bgColor="white" overflowY="scroll" >
      <Test name="Test 4" date="01/29/23" status={Status.Queued} />
      <Test name="Test 3" date="01/29/23" status={Status.Running} />
      <Test name="Test 2" date="01/29/23" status={Status.Failed} />
      <Test name="Test 1" date="01/29/22" status={Status.Success} />
    </VStack>
  );
};

export default Tests;