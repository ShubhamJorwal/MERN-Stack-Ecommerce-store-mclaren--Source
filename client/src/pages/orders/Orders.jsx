import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Orders.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loading from "../../components/loader/Loading";
import { Link } from "react-router-dom";
import Metadata from "../../Rconfig/Metadata";
import { ToastContainer, toast } from "react-toastify";
import { Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { MdRocketLaunch } from "react-icons/md";

const Orders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  const { user } = useSelector((state) => state.user);

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 300,
      flex: 0.7,
      cellClassName: "whiteColorClass",
    },

    ,
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.4,
      cellClassName: (params) => {
        const status = params.row.status;
        return status === "Delivered" ? "greenColorclass" : "redColorclass";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
    //   type: "number",
      minWidth: 150,
      flex: 0.3,
      cellClassName: "whiteColorClass marginleftso",
    },

    {
      field: "amount",
      headerName: "Amount",
    //   type: "number",
      minWidth: 270,
      flex: 0.4,
      cellClassName: "whiteColorClass marginleftso",
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
    //   type: "number",
      sortable: false,
      renderCell: (params) => {
        const rowId = params.row.id;
        return (
          <Link to={`/order/${rowId}`}>
            <MdRocketLaunch />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <>
      {user && <Metadata title={`${user.name} - Orders`} />}
      <Navbar />
      <div id="navvisiback"></div>

      {/* <h1>{orderItems.length}</h1> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          {user && (
            <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
          )}
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Orders;
