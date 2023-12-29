import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center pt-5 vh-100 bg-dark">
      <div className="container">
        <h1 className="display-1 text-white">Welcome, please select an option below!</h1>
      </div>
      <br></br><br></br><br></br>
      <Link to="/login" className="me-5">
        <button className="btn btn-secondary fs-4 text-white">Login</button>
      </Link>
      <Link to="/signup" className="ms-5">
        <button className="btn btn-secondary fs-4 text-white">Signup</button>
      </Link>
    </div>
  );
};
