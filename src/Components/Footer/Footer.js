import React from 'react';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="Footer">
            <span className="Span">Email us: algo-prakash-taran@food-app.com</span>
            <span className="Span">Call us: +1 4152502641</span>
            <span className="Span">Follow us: </span>
            <fl className="Social">
                <li ><AiOutlineFacebook style={{ fontSize: 20, alignItems: "center" }}/></li>
                <li><AiOutlineInstagram style={{ fontSize: 20, alignItems: "center" }}/></li>
                <li><AiOutlineTwitter style={{ fontSize: 20, alignItems: "center" }}/></li>
            </fl>
        </div>
    )
}

export default Footer;


