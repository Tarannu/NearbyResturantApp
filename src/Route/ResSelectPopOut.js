import React, { useState, useEffect } from "react";
import zomato from "../api/zomato";


const ResSelectPopOut = ({ match }) => {
  const [results, setResults] = useState([]);
  
  const detailsFunc = async () => {
    try {
      //location key is extracted from this api
      const res = await zomato.get(`/restaurant?res_id=${match.params.id}`);
      const details = res.data;
      console.log("Detail IS :  ", details);
      if (details) {
        setResults(details);
      }
      const menu = await zomato.get(`/dailymenu?res_id=$16931323`);
      const menuDetails = menu.data;
      console.log("Menu IS :  ", menuDetails);
      if (menuDetails) {
        setResults(menuDetails);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    detailsFunc();
  }, []);

  return (
    <div>
      <div className="res-details">
        <h2>{results.name}</h2>
        <p>They serve cuisines {results.cuisines}</p>
        <p style={{ textAlign: "justify", justifyContent: "center" }}>
          Open Through {results.timings}
        </p>
        <p>Located at</p>
        <p>Contact {results.phone_numbers} </p>
      </div>

      <div className="order-selection">
        <h2>Their daily menu is given for you to select for order</h2>
        <ul>
          <li>Cheese Burger</li>
          <li>Ham Burger</li>
        </ul>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default ResSelectPopOut;