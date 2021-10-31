import React, { useState } from "react";
import Cart from "./Cart.js";
import Profile from "./Profile.js";

const Dashboard = () => {
  const [current, setCurrent] = useState("Profile");
  function profileHandler(e) {
    setCurrent(e.target.value);
  }
  function cartHandler(e) {
    setCurrent(e.target.value);
  }

  return (
    <div>
      <div className="d-flex my-5 justify-content-center">
        <input onClick={profileHandler} type="button" value="Profile" className="btn btn-danger me-3" />
        <input onClick={cartHandler} type="button" value="Cart" className="btn btn-warning" />
      </div>

      {(current === "Profile" && <Profile></Profile>) ||
        (current === "Cart" && <Cart></Cart>)}
    </div>
  );
};

export default Dashboard;
