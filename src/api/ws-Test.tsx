import { useCallback, useEffect } from 'react';

export const useWebSocket = (setSequences: React.Dispatch<React.SetStateAction<any[]>>) => {
  useEffect(() => {
    const ws = new WebSocket("wss://api.macformularacing.com/test");

    ws.onopen = () => {
      console.log("Connection Established!");
      const message = {
        "task": "start",
        "parameter": ""
      };
      ws.send(JSON.stringify(message));
    };

    ws.onmessage = (event) => {
      console.log("received");
      if (event.data.startsWith('{"0":')) {
        const sequencesData: { [key: string]: any } = JSON.parse(event.data);
        const sequencesArray = Object.values(sequencesData);
        setSequences(sequencesArray);
      }
    };

    ws.onclose = () => {
      console.log("Connection Closed!");
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }, [setSequences]);

  const sendMessage = useCallback((message: any) => {
    const ws = new WebSocket("wss://api.macformularacing.com/test");

    ws.onopen = () => {
      ws.send(JSON.stringify(message));
    };
  }, []);

  return { sendMessage };
};
