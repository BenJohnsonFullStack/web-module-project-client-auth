import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/friends" element={<FriendsList />} /> */}
        {/* <Route path="/friends/add" element={<AddFriends/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
