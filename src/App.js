import { useState } from "react";
import io from "socket.io-client";
import "./App.css";
import ChatRoom from "./components/ChatRoom";

// const socket = io.connect("http://localhost:3001");
const socket = io.connect(
  "https://chat-app-backend-vz-051a5f838be5.herokuapp.com"
);

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChatRoom, setShowChatRoom] = useState(false);

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
          <h1> Join Astro Talk Chatroom 🌏</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setUserName(event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Enter room id"
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
}

export default App;
