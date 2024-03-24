 const socket: WebSocket = new WebSocket("ws://api.macformularacing.com/starttest");


const connect: () => void = () => {
    console.log("Attempting Connection...");

    socket.onopen = (): void => {
        console.log("Successfully Connected");
    };

    socket.onmessage = (msg: MessageEvent): void => {
        console.log(msg);
    };

    socket.onclose = (event: CloseEvent): void => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = (error: Event): void => {
        console.log("Socket Error: ", error);
    };
};

const sendMsg: (msg: any) => void = (msg: any): void => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };
