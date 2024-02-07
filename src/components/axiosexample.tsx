
import { Button } from "@chakra-ui/react";
import getData from "../api/getData";
import { useEffect, useState } from 'react';

const AxiosExample = () => {
  const [data, setData] = useState<String>("hi")

  const getRequest = () => {
    getData().then((response) => {
      console.log(response)
      setData(response)
    })
  }

  return (
    <div>
      <p>{data}</p>
      <Button onClick={getRequest}>Click me!</Button>
    </div>
  );
};

export default AxiosExample;