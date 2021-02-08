import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = (props) => {

    return (
        <div className="MenuItem">
            <p className="ItemName">{props.name}</p>
            <p className="ItemPrice">Price: ${Number.parseFloat(props.price.substring(0,3)).toFixed(2)}</p>
            <button 
                className="AddToCartButton"
                onClick={props.clicked}>Add to Cart</button>
        </div>
    )
}

export default MenuItem;