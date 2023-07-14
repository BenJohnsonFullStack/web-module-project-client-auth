import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <h2>FRIENDS DATABASE</h2>
        <div className="nav-links">
          <Link to="/">
            <button className="nav-button">LOGIN.</button>
          </Link>
          <Link to="/friends">
            <button className="nav-button">FRIENDLIST.</button>
          </Link>
          <Link to="/friends/add">
            <button className="nav-button">ADDFRIEND.</button>
          </Link>
          <Link to="/logout">
            <button className="nav-button">LOGOUT.</button>
          </Link>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default NavBar;
