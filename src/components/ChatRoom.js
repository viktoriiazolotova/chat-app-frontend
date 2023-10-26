import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatMessageList from "./ChatMessageList";
import "./ChatRoom.css";

const API_KEY = "4Hu1n4FgqIaKDODxn6dpxLg6hiExQqIP0wPbf9Re";

const ChatRoom = ({ socket, userName, room }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // console.log(messages);

  const fetchAPODImageUrl = () => {
    // currently default date for APOD photo is the current day,
    //
    const date = new Date().toISOString().split("T")[0];

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      )
      .then((response) => {
        if (response.data.media_type === "image") {
          setImageUrl(response.data.url);
        } else {
          setError("Sorry, no picture for today");
        }
      })
      .catch((error) => {
        console.error("Error fetching APOD:", error);
        setError("Sorry, there are issues with your request");
      });
  };

  const containsApodKeyword = (arr) => {
    const apodRegex = /\bapod\b/i;
    return arr.some((obj) => apodRegex.test(obj.message));
  };

  const checkForAPODReferences = () => {
    if (containsApodKeyword(messages)) {
      fetchAPODImageUrl();
    }
  };

  useEffect(() => {
    checkForAPODReferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        userName: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      // console.log(messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  return (
    <div className="chat-room">
      <div className="chat-header">
        <p>Hi {userName}</p>
        <p>Welcome to the Chat Room {room}</p>
      </div>
      <div>
        <ChatMessageList className="chat-body" messages={messages} />
        {imageUrl && <img className="apod-image" src={imageUrl} alt="APOD" />}
        {error && <p className="error-text">{error}</p>}
      </div>
      <div className="chat-footer">
        <input
          className="text-input-div"
          type="text"
          value={currentMessage}
          placeholder="Type your message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        ></input>
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
