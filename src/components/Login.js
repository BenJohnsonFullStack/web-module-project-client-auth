import React, { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <div className="input-field">
              <label>USERNAME</label>
              <input
                type="text"
                name="username"
                placeholder="ENTER USERNAME"
                value={values.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label>PASSWORD</label>
              <input
                type="text"
                name="password"
                placeholder="ENTER PASSWORD"
                value={values.password}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Login;
