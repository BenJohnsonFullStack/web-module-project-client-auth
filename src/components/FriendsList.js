import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../App";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseURL}/api/friends`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h1>FRIENDS LIST</h1>
      <h2 className="error">{error !== "" ? `Error: ${error}` : ""}</h2>
      <div className="friends">
        <ul>
          {friends.map((friend) => {
            return (
              <li
                key={friend.id}
              >{`- ${friend.name} - ${friend.age} - ${friend.email}`}</li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FriendsList;
