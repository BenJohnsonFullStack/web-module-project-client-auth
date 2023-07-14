import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
      });
  }, []);

  return (
    <>
      <h1>FRIENDS LIST</h1>
      <h2 className="error">{errorMessage !== "" ? errorMessage : ""}</h2>
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
