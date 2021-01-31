import axios from "axios";
import React, { useEffect, useState } from "react";
import './MenuOrder.css'


const MenuOrder = ({ resID }) => {
const [menus, setMenu] = useState([]);
const [message,setMessage]=useState("");

  const menuFunction = async () => {
    try {
      const res = await axios.get(
        "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624",
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
  const displayOrder=()=>{
      setMessage("You order has been placed please pay at the venue");
  }

  return (
    <div>
     <div>
        <div className="order-selection">
          <h2>Todays menu is given for you to select for order</h2>
          <div>{menus[1].daily_menu.dishes.map(item=>
            (<zl className="menu-list">
              <li id={item.dish.dish_id}><b>Dish name is :</b> {item.dish.name} and{" "}<b>price is</b> {item.dish.price}</li>
            </zl>
            )
        )}</div>
          
          <button className="order-button" onClick={displayOrder}>Place Order</button>
          <div className="order-placed">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrder;
