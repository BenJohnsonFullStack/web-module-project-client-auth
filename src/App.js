import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import NavBar from "./components/NavBar";

const baseURL = "http://localhost:9000";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
      </Routes>
    </div>
  );
}

export { baseURL };
export default App;
