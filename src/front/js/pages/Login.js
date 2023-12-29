import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Call the login function with the provided email and password
      const response = await actions.login(email, password);

      if (response && response.msg === "ok") {
        // Navigate to the profile page
        navigate("/profile");
      } else {
        // Handle other cases if needed
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      // Reset loading state even if an error occurs
      setLoading(false);
    }

    // Clear inputs
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      // Cancel any asynchronous tasks or subscriptions here
    };
  }, []); // Empty dependency array means this effect runs once (on mount) and cleans up on unmount

  return (
    <div className="container-fluid text-center pt-5 vh-100 bg-dark">
      <form className="container" onSubmit={handleLogin}>
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
        <button
          type="submit"
          className="btn btn-success mt-5 fs-4 text-white"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
