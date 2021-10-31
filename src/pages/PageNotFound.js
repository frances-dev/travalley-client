import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center my-5">
        <h1 style={{ fontSize: "150px", color: "blue" }}>404</h1>
        <h4 className="text-dark mb-5">Sorry! Page Not Found</h4>
        <NavLink to="/home">
          <button className="btn btn-danger">Return to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
