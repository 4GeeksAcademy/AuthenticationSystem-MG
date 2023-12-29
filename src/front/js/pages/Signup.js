import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Call the signup function with the provided email and password
    const response = await actions.signup(email, password);

    // You can handle the response if needed
    console.log(response);

    // Clear inputs
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid text-center pt-5 vh-100 bg-dark">
      <form className="container" onSubmit={handleSignup}>
        <div className="form-group">
          <label
            htmlFor="exampleInputEmail1"
            className="d-flex text-left fs-3 text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email} // Set the value of the email input
            onChange={(e) => setEmail(e.target.value)} // Update the email state on change
          />
          <small id="emailHelp" className="form-text text-muted-white">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label
            htmlFor="exampleInputPassword1"
            className="d-flex text-left fs-3 text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control bg-dark text-white"
            id="exampleInputPassword1"
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
