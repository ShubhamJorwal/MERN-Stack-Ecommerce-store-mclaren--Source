import React from "react";
import "./cart.scss";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Heading from "../../components/heading/Heading";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <> 
    <Navbar/>
    
      <div id="navvisiback"></div>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <MdOutlineRemoveShoppingCart />

          <p>YOUR CART IS EMPTY</p>
          <Link to="/collection">View Collection</Link>
        </div>
      ) : (
        <>
        <Heading heading={"Cart"}/>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div id="quant">
                    <button style={{ borderRight: "none" }}
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                    <input style={{ borderRight: "none", borderLeft: "none" }} type="number" value={item.quantity} readOnly />
                    <button style={{ borderLeft: "none" }}
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                     <AiOutlinePlus />
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
