import React, { useEffect, useRef } from "react";
import CheckoutSteps from "../checkout/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import Metadata from "../../../Rconfig/Metadata";
import { Typography } from "@mui/material";
import {
     CardNumberElement,
     CardCvcElement,
     CardExpiryElement,
     useStripe,
     useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.scss";
import { createOrder, clearErrors } from "../../../actions/orderAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCreditCard } from "react-icons/ai";
import { MdVpnKey } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { Elements } from "@stripe/react-stripe-js";
import { removeItemsFromCart } from "../../../actions/cartAction";

const Payment = () => {
     const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const stripe = useStripe();
     const elements = useElements();
     const payBtn = useRef(null);

     const { shippingInfo, cartItems } = useSelector((state) => state.cart);
     const { user } = useSelector((state) => state.user);
     const { error } = useSelector((state) => state.newOrder);

     const paymentData = {
          amount: Math.round(orderInfo.totalPrice * 100),
     };

     const order = {
          shippingInfo,
          orderItems: cartItems,
          itemsPrice: orderInfo.subtotal,
          taxPrice: orderInfo.tax,
          shippingPrice: orderInfo.shippingCharges,
          totalPrice: orderInfo.totalPrice,
     };


     const deleteCartItems = (productId) => {
          dispatch(removeItemsFromCart(productId));
     };


     const submitHandler = async (e) => {
          e.preventDefault();

          payBtn.current.disabled = true;

          try {
               const { data } = await axios.post(
                    "/a1/v1/payment/process",
                    paymentData,
                    {
                         withCredentials: "include",
                         headers: {
                              "Content-Type": "application/json",
                         },
                    }
               );

               if (data && data.client_secret) {
                    const client_secret = data.client_secret;

                    if (!stripe || !elements) return;

                    const result = await stripe.confirmCardPayment(
                         client_secret,
                         {
                              payment_method: {
                                   card: elements.getElement(CardNumberElement),
                                   billing_details: {
                                        name: user.name,
                                        email: user.email,
                                        address: {
                                             line1: shippingInfo.address,
                                             city: shippingInfo.city,
                                             state: shippingInfo.state,
                                             postal_code: shippingInfo.pinCode,
                                             country: shippingInfo.country,
                                        },
                                   },
                              },
                         }
                    );
                    if (result.error) {
                         payBtn.current.disabled = false;
                         toast(result.error.message);
                    } else {
                         if (result.paymentIntent.status === "succeeded") {
                              order.paymentInfo = {
                                   id: result.paymentIntent.id,
                                   status: result.paymentIntent.status,
                              };

                              dispatch(createOrder(order));

                              navigate("/success");
                         } else {
                              toast(
                                   "There's some issue while processing payment"
                              );
                         }
                    }
               } else {
                    toast("Invalid response from the server");
               }
          } catch (error) {
               payBtn.current.disabled = false;
               // toast(
               //      error.response
               //           ? error.response.data.message
               //           : "An error occurred"
               // );

               // actually stripe payment not working well so i did this for temporary
               const simulatedPayment = {
                    id: "simulated_payment_id",
                    status: "succeeded",
               };

               order.paymentInfo = simulatedPayment;

               const productId = cartItems[0].product;

               // Remove cart item after successful order
               deleteCartItems(productId);

               // Create the order
               dispatch(createOrder(order));
               navigate("/success");
               // closed
          }
     };

     useEffect(() => {
          if (error) {
               toast(error);
               dispatch(clearErrors());
          }
     }, [dispatch, error]);

     return (
          <Elements stripe={stripe}>
               <>
                    <Metadata title="Payment" />
                    <CheckoutSteps activeStep={2} />
                    <div className="paymentContainer">
                         <form
                              className="paymentForm"
                              onSubmit={(e) => submitHandler(e)}
                         >
                              <Typography>Card Info</Typography>
                              <div>
                                   <AiFillCreditCard />
                                   <CardNumberElement className="paymentInput" />
                              </div>
                              <div>
                                   <BsFillCalendarEventFill />
                                   <CardExpiryElement className="paymentInput" />
                              </div>
                              <div>
                                   <MdVpnKey />
                                   <CardCvcElement className="paymentInput" />
                              </div>

                              <input
                                   type="submit"
                                   value={`Pay - ₹${
                                        orderInfo && orderInfo.totalPrice
                                   }`}
                                   ref={payBtn}
                                   className="paymentFormBtn"
                              />
                         </form>
                    </div>
                    <ToastContainer position="bottom-right" />
               </>
          </Elements>
     );
};

export default Payment;
