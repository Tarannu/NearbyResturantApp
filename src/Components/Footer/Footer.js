import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2 style={{textAlign:'justify',textDecoration: 'underline'}}>About us</h2>
        <p style={{textAllign:'justify'}}>
          {" "}
          We are trying to provide food search at your fingertips with much more
          ease.
        </p>
      </div>
      <div style={{textAlign:"justify"}}>
        <h2 style={{textDecoration: 'underline'}}>Contact us</h2>
        <p> Phone : 325 666 6666</p>
        <p>Email: algo-prakash-taran@food-app.com</p>
      
      <fl className="social">
            <li ><AiOutlineFacebook style={{ fontSize: 20, alignItems: "center" }}/></li>
            <li><AiOutlineInstagram style={{ fontSize: 20, alignItems: "center" }}/></li>
            <li><AiOutlineTwitter style={{ fontSize: 20, alignItems: "center" }}/></li>
      </fl>
      </div>
    </footer>
  );
};

export default Footer;
// import React from 'react';
// import './Footer.css';

// const Footer = (props) => {
//     return (
//         <div className="Footer">
//             <span className="Span">Email us: prakas.ac@gmail.com</span>
//             <span className="Span">Call us: +1 4152502641</span>
//         </div>
//     )
// }

// export default Footer;
