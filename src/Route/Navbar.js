import React from "react";
import { Link } from "react-router-dom";


const nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="nav">
      <h1>Food App</h1>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/About" style={navStyle}>
          <li>About Us</li>
        </Link>
        <Link to="/SignIn" style={navStyle}>
        <li>Sign In</li>
        </Link>
      </ul>
    </div>
  );
};

export default nav;
