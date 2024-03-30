import { useEffect, useState } from "react";

/* @ts-ignore */
export default function WebSocketCall({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  /* @ts-ignore */
  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    console.log(socket.emit("data", message));
    setMessage("");
  };

  useEffect(() => {
    /* @ts-ignore */
    socket.on("data", (data) => {
      /* @ts-ignore */
      setMessages((prevMessages) => [...prevMessages, data.data]);
    });

    return () => {
      /* @ts-ignore */
      socket.off("data", (data) => {
        console.log("data event was removed");
      });
    };
  }, [socket]);

  return (
    <div>
      <h2>WebSocket Communication</h2>
      <input type="text" value={message} onChange={handleText} />
      <button onClick={handleSubmit}>submit</button>
      <ul>
        {messages.map((message, ind) => {
          return <li key={ind}>{message}</li>;
        })}
      </ul>
    </div>
  );
}