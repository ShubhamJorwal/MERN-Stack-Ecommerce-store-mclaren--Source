import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./allProducts.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import Metadata from "../../../Rconfig/Metadata";
import SideBar from "../siderbar/Sidebar";
import { DELETE_PRODUCT_RESET } from "../../../constants/productConstants";
import { AiFillEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import AdNavbar from "../../../components/navbar/AdNavbar";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
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
      toast("Product Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 0.7,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.1,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.4,
    },

    {
      field: "actions",
      flex: 0.4,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const rowId = params.row.id;
        return (
          <>
            <Link to={`/admin/product/${rowId}`}>
              <AiFillEdit />
            </Link>

            <Button onClick={() => deleteProductHandler(rowId)}>
              <MdAutoDelete />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      <Metadata title={`ALL PRODUCTS - Admin`} />
      <div className="dashboard">
        <AdNavbar/>
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

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

export default AllProducts;
