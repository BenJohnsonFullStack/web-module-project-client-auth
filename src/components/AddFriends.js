import React from "react";
import { useState } from "react";

const AddFriends = () => {
  const [values, setValues] = useState({
    friendName: "",
    friendEmail: "",
  });

  const resetForm = () => {
    setValues({
      friendName: "",
      friendEmail: "",
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
    e.preventDefault();
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="friendName">FRIEND NAME</label>
            <input
              type="text"
              name="friendName"
              placeholder="ENTER NAME"
              value={values.friendName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="friendEmail">FRIEND EMAIL</label>
            <input
              type="text"
              name="friendEmail"
              placeholder="ENTER EMAIL"
              value={values.friendEmail}
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
