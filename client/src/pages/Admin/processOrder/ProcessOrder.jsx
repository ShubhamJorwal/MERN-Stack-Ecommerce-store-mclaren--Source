import React, { useEffect, useState } from "react";
import Metadata from "../../../Rconfig/Metadata";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import SideBar from "../siderbar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { UPDATE_ORDER_RESET } from "../../../constants/orderConstant";
import "./processOrder.scss";
import Loading from "../../../components/loader/Loading";
import { MdOutlineAccountTree } from "react-icons/md";
import AdNavbar from "../../../components/navbar/AdNavbar";

const ProcessOrder = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);
  const { id } = useParams();

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);
    dispatch(updateOrder(id, myForm));
  };

  const dispatch = useDispatch();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      toast(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, isUpdated, updateError]);

  return (
    <>
      <Metadata title="Process Order" />
      <AdNavbar />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loading />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display:
                  order && order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
                      <span>{order && order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order &&
                          order.shippingInfo &&
                          order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>
                        {order &&
                          order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>

                  <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order &&
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order &&
                        order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>
                        {order && order.totalPrice && order.totalPrice}
                      </span>
                    </div>
                  </div>

                  <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order &&
                          order.orderStatus &&
                          order.orderStatus === "Delivered"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order && order.orderStatus && order.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div id="confircaritelllll" className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order &&
                      order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>{" "}
                          <span>
                            {item.quantity} X ₹{item.price} ={" "}
                            <b>₹{item.price * item.quantity}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display:
                    order && order.orderStatus === "Delivered"
                      ? "none"
                      : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <MdOutlineAccountTree />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Next step</option>
                      {order && order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order && order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>
                  <Button
                    id="srbrn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};

export default ProcessOrder;
