import axios from "axios";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { GREETING, HI, REACT_API_KEY, WELCOME_EMOJI } from "../constants";
import ChatMessageList from "./ChatMessageList";
import "./ChatRoom.css";

const ChatRoom = ({ socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchAPODImageUrl = () => {
    // currently default date for APOD photo is the current day

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_API_KEY}`)
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

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        userName: userName,
        message: currentMessage,
        time: getCurrentTime(),
      };

      await socket.emit("send_message", messageData);
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
        <p>
          {HI} <span>{userName}</span>
          {WELCOME_EMOJI}
        </p>
        <p>
          {GREETING} <span>{room}</span>
        </p>
      </div>
      <div>
        <ChatMessageList className="chat-body" messages={messages} />
        {imageUrl && <img className="apod-image" src={imageUrl} alt="APOD" />}
        {error && <p className="error-text">{error}</p>}
      </div>
      <div className="chat-footer">
        <input
          className="text-input-div"
          id="messageInput"
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
ChatRoom.propTypes = {
  socket: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
};

export default ChatRoom;
