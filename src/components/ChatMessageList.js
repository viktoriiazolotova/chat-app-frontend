import PropTypes from "prop-types";
import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageList = ({ messages }) => {
  return (
    <div className="chat-message-list">
      {messages.map(({ userName, message, time }, index) => (
        <ChatMessage
          key={index}
          userName={userName}
          message={message}
          time={time}
        />
      ))}
    </div>
  );
};

ChatMessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ChatMessageList;
