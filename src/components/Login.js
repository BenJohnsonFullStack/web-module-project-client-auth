import React from "react";

function Login() {
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
      <div className="form-container">
        <h1>LOGIN</h1>
        <form>
          <div className="input-fields">
            <div className="input-field">
              <label>USERNAME</label>
              <input type="text" name="username"></input>
            </div>
            <div className="input-field">
              <label>PASSWORD</label>
              <input type="text" name="password"></input>
            </div>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Login;
