import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = (props) => {

    return (
        <div className="MenuItem">
            <p className="ItemName">{props.name}</p>
            <p className="ItemPrice">Price: {props.price}</p>
            <button 
                className="AddToCartButton"
                onClick={props.clicked}>Add to Cart</button>
        </div>
    )
}

export default MenuItem;