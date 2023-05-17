import React from "react";
import { Typography } from "@mui/material";
import "./orderSuccess.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <>
    <Navbar/>
      <div className="orderSuccess">
        <AiOutlineCheckCircle />
        <Typography>Your Order has been Placed successfully </Typography>
        <Link to={"/orders"}>View Orders</Link>
      </div>
    </>
  );
};

export default OrderSuccess;
