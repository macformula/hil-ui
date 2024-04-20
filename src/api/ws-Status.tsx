// @ts-nocheck

import { useCallback, useEffect } from 'react';

export const useWebSocketStatus = (setTest: React.Dispatch<React.SetStateAction<any[]>>) => {
  useEffect(() => {
    const ws = new WebSocket("wss://api.macformularacing.com/status");

    ws.onopen = () => {
      console.log("Connection Established with Status Endpoint");
      // Send an initial empty message
      ws.send(JSON.stringify({"nothing": ""}));
      
      // Set up an interval to send an empty message every 50 seconds to stay connected to the websocket
      const intervalId = setInterval(() => {
        ws.send(JSON.stringify({"nothing": ""}));
        console.log("Sent empty message to WebSocket server");
      }, 50000);

      return () => {
        clearInterval(intervalId);
        ws.close();
      };
    };

    ws.onmessage = (event) => {
      console.log("Received from Status");
      const sequencesData = JSON.parse(event.data);
    //   const sequencesArray = Object.values(sequencesData);
      setTest(sequencesData);
      console.log("in websocket", sequencesData);
    };

    ws.onclose = () => {
      console.log("Connection Closed with Tests!");
    };

    ws.onerror = () => {
      console.log("WS Error with Test");
    };

  }, [setTest]);
};
