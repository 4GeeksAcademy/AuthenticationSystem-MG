import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  let myToken = localStorage.getItem("authToken");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (myToken == null || myToken == "") {
      console.log("token invalido");
      navigate("/");
    } else {
      console.log("token valido");
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Call the logout function with the provided email and password
      if (myToken == null || myToken == "") {
        console.log("token invalido");
        navigate("/");
      } else {
        console.log(myToken);
        const response = await actions.logout();
        if (response && response.msg === "Logout successful") {
          // Navigate to the profile page
          navigate("/");
          myToken = "";
          console.log(myToken);
        } else {
          // Handle other cases if needed
          console.log("Logout failed");
        }
      }
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      // Reset loading state even if an error occurs
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-dark vh-100">
      <button
        className="btn btn-danger d-flex ms-auto"
        onClick={handleLogout}
        disabled={loading}
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
      <div>Profile</div>
    </div>
  );
};
