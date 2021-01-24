import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="Nav">
            <ul className="NavLinks">
                <NavLink className="NavItem" to="/about">
                    <li>About us</li>
                </NavLink>

                <NavLink className="NavItem" to="/">
                    <li>Home</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;