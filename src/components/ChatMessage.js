import PropTypes from "prop-types";
import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ userName, message, time }) => {
  return (
    <div className="chat-message">
      <p className="username-time-box">
        {userName}: <span className="message-time">{time}</span>
      </p>
      <p className="message-body">{message}</p>
    </div>
  );
};

ChatMessage.propTypes = {
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ChatMessage;
