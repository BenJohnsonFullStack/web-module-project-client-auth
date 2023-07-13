import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <h2>FRIENDS DATABASE</h2>
        <div className="nav-links">
          <button className="nav-button">LOGIN.</button>
          <button className="nav-button">FRIENDLIST.</button>
          <button className="nav-button">ADDFRIEND.</button>
          <button className="nav-button">LOGOUT</button>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default NavBar;
