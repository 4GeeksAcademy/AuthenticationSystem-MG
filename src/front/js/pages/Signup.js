import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Call the signup function with the provided email and password
    const response = await actions.signup(email, password);

    // You can handle the response if needed
    console.log(response);

    // Clear inputs
    setEmail("");
    setUsername("");
    setName("");
    setAge("");
    setPassword("");
  };

  return (
    <div className="container-fluid text-center pt-5 vh-100 bg-dark">
      <form className="container" onSubmit={handleSignup}>
        <div className="form-group">
          <label
            htmlFor="signupEmail"
            className="d-flex text-left fs-3 text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control bg-dark text-white"
            id="signupEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email} // Set the value of the email input
            onChange={(e) => setEmail(e.target.value)} // Update the email state on change
          />
          <small id="emailHelp" className="form-text text-muted-white">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="signupUsername"
            className="d-flex text-left fs-3 text-white"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            id="signupUsername"
            placeholder="Enter username"
            value={username} // Set the value of the email input
            onChange={(e) => setUsername(e.target.value)} // Update the email state on change
          />
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="signupName"
            className="d-flex text-left fs-3 text-white"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control bg-dark text-white"
            id="signupName"
            placeholder="Enter name"
            value={name} // Set the value of the email input
            onChange={(e) => setName(e.target.value)} // Update the email state on change
          />
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="signupAge"
            className="d-flex text-left fs-3 text-white"
          >
            Age
          </label>
          <input
            type="number"
            className="form-control bg-dark text-white"
            id="signupAge"
            placeholder="Enter age"
            value={age} // Set the value of the email input
            onChange={(e) => setAge(e.target.value)} // Update the email state on change
          />
        </div>
        <div className="form-group mt-2">
          <label
            htmlFor="signupPassword"
            className="d-flex text-left fs-3 text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control bg-dark text-white"
            id="signupPassword"
            placeholder="Password"
            value={password} // Set the value of the password input
            onChange={(e) => setPassword(e.target.value)} // Update the password state on change
          />
        </div>
        <button type="submit" className="btn btn-success mt-5 fs-4 text-white">
          Signup
        </button>
      </form>
    </div>
  );
};
