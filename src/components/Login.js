import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

function Login() {
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
    axiosWithAuth()
      .post("/login", credential)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => {
        setError(err.response.data.error);
      })
      .finally(() => {
        setCredential({
          username: "",
          password: "",
        });
      });
  };

  return (
    <div className="form-container">
      <h1>LOGIN</h1>
      <h2 className="error">{error !== "" ? error : ""}</h2>
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
