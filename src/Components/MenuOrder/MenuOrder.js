import axios from "axios";
import React, { useEffect, useState } from "react";
import './MenuOrder.css'


const MenuOrder = ({ resID }) => {
const [menus, setMenu] = useState([]);
const [message,setMessage]=useState("");
const [order,setOrder]=useState([]);

  const menuFunction = async () => {
    try {
      const res = await axios.get(
        `https://developers.zomato.com/api/v2.1/dailymenu?res_id=${resID}`,
        {
          headers: {
            "user-key": "c954fb5d1007bff9c2929e70c676181b",
          },
        }
      );
      const menuResult = res.data.daily_menus;
    //   console.log("Menu ", menuResult[0].daily_menu.dishes.map(item=>(
    //       item.dish.name
    //   )));
    if(menuResult.length){
      setMenu(menuResult);
    }
      console.log("menu res is ",menuResult[0]);
     console.log("menu state is ", menus[1].daily_menu.dishes);
    //  .map(item=>(
    //      item.daily_menu.dishes.map(i=>i.dish.name)
    //  )));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    menuFunction();
  }, [resID]);
  const onOrderChange=(e)=>{
    setOrder(e.target.value);
  }
  const displayOrder=()=>{
      setMessage(`You order has been placed please pay at the venue and your order is ${order}`);
      console.log("Order is ",order);

  }
 
  
  return (
    <div>
     
        <div>
        <div className="order-selection">
        <h2>Please insert your order below</h2>
        <input onChange={onOrderChange}/>{"  "}
        
          <button className="order-button" onClick={displayOrder}>Place Order</button>
          <div className="order-placed">{message} </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrder;
