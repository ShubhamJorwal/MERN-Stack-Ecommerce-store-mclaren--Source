import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Metadata from "../../../Rconfig/Metadata";
import SideBar from "../siderbar/Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../../constants/orderConstant";
import { ToastContainer, toast } from "react-toastify";
import AdNavbar from "../../../components/navbar/AdNavbar";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
        toast(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
        toast(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast("Order Deleted Successfully");
      navigate("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, error, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        const status = params.row.status;
        return status === "Delivered" ? "greenColorclass" : "redColorclass";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const rowId = params.row.id;
        return (
          <>
            <Link to={`/admin/order/${rowId}`}>
              <AiFillEdit />
            </Link>

            <Button onClick={() => deleteOrderHandler(rowId)}>
              <MdAutoDelete />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <>
      <Metadata title={`ALL ORDERS - Admin`} />
      <AdNavbar/>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};

export default OrderList;
