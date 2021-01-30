import React from 'react'

const MenuOrder = ({resID}) => {
    return (
        <div>
        <div>
        ID is {resID}
        <div className="order-selection">
          <h2>Their daily menu is given for you to select for order</h2>
          <ul>
            <li>Cheese Burger</li>
            <li>Ham Burger</li>
          </ul>
          <button>Place Order</button>
        </div>
      </div>
        </div>
    )
}

export default MenuOrder

