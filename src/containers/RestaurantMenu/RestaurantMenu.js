import React, { useContext, useEffect, useState } from "react";
import Spinner from '../../components/Spinner/Spinner';
import MenuItem from '../../components/MenuItem/MenuItem';
import Feedback from '../../components/Feedback/Feedback';
import Logout from '../../components/Logout';
import {useAuthContext} from '../../context/auth-context';
import zomato_menu from '../../api/zomato_menu';
import './RestaurantMenu.css'


const RestaurantMenu = ({history, match }) => {
const [menu, setMenu] = useState([]);
const [message, setMessage]=useState("");
const [cart, setCart] = useState({
  items: [],
  price: 0,
});

const { user, setUser } = useAuthContext();

// will be called when the component is mounted.
useEffect(() => {
    getMenu();
  }, [match.params.id]);

  const getMenu = async () => {
    try {
      const res = await zomato_menu.get('/dailymenu?res_id=16507624',
        {
          headers: {
            "user-key": "f3ce3c27036399f0ffd1ec96c4cd6940",
          },
        }
      );
      const menuResult = res.data.daily_menus;
      //console.log(menuResult[0].daily_menu.dishes);
      const menuElements = [];
      for(let i=0; i<menuResult[0].daily_menu.dishes.length;i++){
        menuElements.push(menuResult[0].daily_menu.dishes[i].dish);
      }
      //console.log(menuElements);
      setMenu(menuElements);
    } catch (err) {
      console.log(err);
    }
  };
  const addItemsToCart = (name, price) => {
    let updatedItems = [...cart.items];
    updatedItems.push({name: name, price: price});
    let updatedPrice = cart.price + Number.parseFloat(price.substring(0, 3));
    setCart({items: updatedItems, price: updatedPrice})
    //console.log(cart);
}


  const placeOrder=()=>{
      setMessage("You order has been placed.");
      //console.log(authContext.authenticated);

  }

  const handleLogout = () => {
      setUser(null);
      history.push('/home');
  }
  //console.log(menu);
  const menuItems = menu.map(menuItem => {
    //console.log(menuItem);
    return (
      <MenuItem 
        key={menuItem.dish_id}
        name={menuItem.name}
        price={menuItem.price}
        clicked={()=>addItemsToCart(menuItem.name, menuItem.price)}
      />
    )
  })
  return (
        <div 
            key="Restaurant Menu"
            className="Menu">
            {user ? <Logout handleLogout={handleLogout}/> : null}
            <div className="Cart">
                <p className="YourCart">Your cart</p>

                <div className="ItemAndPrice">
                    <p>Items: <strong>{cart.items.length}</strong></p>
                    <p>Price: <strong>${cart.price.toFixed(2)}</strong></p>
                    <button className="OrderButton" onClick={placeOrder}>Place Order</button>
                </div>
            </div>
            {message ? <>
                    <p className="OrderPlaced">{message}</p>
                </> : null}
            {(message && user) ?  <Feedback />: null}
            <h3 style={{textAlign:'justify', marginBottom:'25px'}}>Select your favorite items</h3>
            {menu.length > 0 ? menuItems : <Spinner/>}
        </div>
  );
};

export default RestaurantMenu;