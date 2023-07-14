import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const baseURL = "http://localhost:9000";
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({
      ...credential,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/api/login`, credential)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="form-container">
      <h1>LOGIN</h1>
      <h2 className="error">{error !== "" ? `Error: ${error}` : ""}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              placeholder="ENTER USERNAME"
              value={credential.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="text"
              name="password"
              placeholder="ENTER PASSWORD"
              value={credential.password}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
