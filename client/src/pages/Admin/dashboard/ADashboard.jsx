import React, { useEffect } from "react";
import './adashboard.scss'
import Sidebar from "../siderbar/Sidebar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { getAdminProduct } from "../../../actions/productAction";
import { getAllOrders } from "../../../actions/orderAction";
import { getAllUsers } from "../../../actions/userAction";
import Metadata from "../../../Rconfig/Metadata";
import AdNavbar from "../../../components/navbar/AdNavbar";

const ADashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#03a9f4"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        borderColor: "#03a8f486", 
        backgroundColor: ["#FEFF86", "#B9E9FC"],
        hoverBackgroundColor: ["khaki", "#B0DAFF"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <>
      <div className="dashboard">
        <Metadata title="Dashboard - Admin Panel" />
        <Sidebar />
        <AdNavbar/>
        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>

          <div className="dashboardSummary">
            <div>
              <p>Total Amount <br /> ₹{totalAmount}</p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Products</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                <p>{orders && orders.length}</p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p>{users && users.length}</p>
              </Link>
            </div>
          </div>

          <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut data={doughnutState} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ADashboard;
