import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageList = ({ messages }) => {
  return (
    <div className="chat-message-list">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          userName={message.userName}
          message={message.message}
          time={message.time}
        />
      ))}
    </div>
  );
};

export default ChatMessageList;
