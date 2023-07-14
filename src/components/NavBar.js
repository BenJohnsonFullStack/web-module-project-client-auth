import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

const NavBar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [Login(), Logout()]);

  return (
    <>
      <div className="navbar">
        <h2>FRIENDS DATABASE</h2>
        <div className="nav-links">
          <Link to="/friends">
            <button className="nav-button">FRIENDLIST.</button>
          </Link>
          <Link to="/friends/add">
            <button className="nav-button">ADDFRIEND.</button>
          </Link>
          <Link to={token !== null ? "/logout" : "/login"}>
            <button className="nav-button">
              {token !== null ? "LOGOUT" : "LOGIN"}
            </button>
          </Link>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default NavBar;
