import io from "socket.io-client";
import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import { HEADER, SOCKET_SERVER_URL } from "./constants";
import "./App.css";

const socket = io.connect(SOCKET_SERVER_URL);

const App = () => {
  const [room, setRoom] = useState("");
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [userName, setUserName] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChatRoom(true);
    }
  };

  return (
    <div className="App">
      {!showChatRoom && (
        <div className="join-chatroom-div">
          <h1> {HEADER}</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(event) => setUserName(event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Enter Room ID"
            onChange={(event) => setRoom(event.target.value)}
          ></input>
          <button onClick={joinRoom}>Join a Room</button>
        </div>
      )}
      {showChatRoom && (
        <ChatRoom socket={socket} userName={userName} room={room} />
      )}
    </div>
  );
};

export default App;
