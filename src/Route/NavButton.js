import React from "react";
import {Link} from 'react-router-dom';

const NavButton = () => {
  return (
    <div>
      <p>
        If you dont have an account {" "} 
        <Link to="/SignUpForm">
         <button> Create Account</button>
        </Link>
      </p>
    </div>
  );
};

export default NavButton;
