import React from "react";

function Login() {
  return (
    <div className="navbar">
      <h2>FRIENDS DATABASE</h2>
      <button className="nav-button">LOGIN.</button>
      <button className="nav-button">FRIENDLIST.</button>
      <button className="nav-button">ADDFRIEND.</button>
      <button className="nav-button">LOGOUT</button>
      <div className="spacer"></div>
      <h1>LOGIN</h1>
      <label>
        USERNAME
        <input></input>
      </label>
      <label>
        PASSWORD
        <input></input>
      </label>
    </div>
  );
}

export default Login;
