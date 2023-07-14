import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

const AddFriends = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
  });

  const resetForm = () => {
    setValues({
      name: "",
      age: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const newFriend = {
      id: Date.now(),
      name: values.name,
      age: values.age,
      email: values.email,
    };
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(() => {
        navigate("/friends");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
      })
      .finally(() => {
        resetForm();
      });
  };

  return (
    <div className="form-container">
      <h1>ADD FRIEND</h1>
      <h2 className="error">{errorMessage !== "" ? errorMessage : ""}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="name">FRIEND NAME</label>
            <input
              type="text"
              name="name"
              placeholder="ENTER NAME"
              value={values.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="age">FRIEND AGE</label>
            <input
              type="text"
              name="age"
              placeholder="ENTER AGE"
              value={values.age}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">FRIEND EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="ENTER EMAIL"
              value={values.email}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddFriends;
