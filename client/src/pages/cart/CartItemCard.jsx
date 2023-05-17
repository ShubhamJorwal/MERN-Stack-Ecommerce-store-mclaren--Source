import React from "react";
import './cart.scss'
import { Link } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
        <p style={{margin:"0"}} onClick={() => deleteCartItems(item.product)}> <MdRemoveShoppingCart size={"1.5vmax"}/></p>
      </div>
    </div>
  );
};

export default CartItemCard;
