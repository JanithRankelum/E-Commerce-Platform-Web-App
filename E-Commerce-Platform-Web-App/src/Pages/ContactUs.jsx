import React, { useState, useEffect } from "react";
import "./ContactUs.css";

const RealTimeUpdates = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    const websocket = new WebSocket("ws://127.0.0.1:8080");

    websocket.onopen = () => {
      console.log("WebSocket is connected");
      // Generate a unique client ID
      const id = Math.floor(Math.random() * 1000);
      setClientId(id);
    };

    websocket.onmessage = (evt) => {
      const message = evt.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    websocket.onclose = () => {
      console.log("WebSocket is closed");
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(
        JSON.stringify({
          type: "message",
          payload: message,
          clientId: clientId,
        })
      );
      setMessage("");
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <section id="chat-container">
        <section id="chat-header">
          <h1>Real-time Communication With Client Using WebSockets</h1>
          <h2>Client {clientId}</h2>
        </section>
        <section id="chat-body">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </section>
        <section id="chat-enter">
          <input type="text" placeholder="Enter Message" value={message} onChange={handleInputChange} />
          <button onClick={sendMessage}>Send Message</button>
        </section>
      </section>
    </div>
  );
};

export default RealTimeUpdates;
