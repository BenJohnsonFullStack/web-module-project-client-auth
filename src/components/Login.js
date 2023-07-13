import React from "react";

function Login() {
  return (
    <div className="navbar">
      <h2>FRIENDS DATABASE</h2>
      <div className="nav-links">
        <button className="nav-button">LOGIN.</button>
        <button className="nav-button">FRIENDLIST.</button>
        <button className="nav-button">ADDFRIEND.</button>
        <button className="nav-button">LOGOUT</button>
      </div>
      <div className="spacer"></div>
      <h1>LOGIN</h1>
      <form>
        <label>
          USERNAME
          <input type="text" name="username"></input>
        </label>
        <label>
          PASSWORD
          <input type="text" name="password"></input>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
