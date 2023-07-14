import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";

const baseURL = "http://localhost:9000";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/friends" element={<FriendsList />} />
        <Route exact path="/friends/add" element={<AddFriends />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export { baseURL };
export default App;
