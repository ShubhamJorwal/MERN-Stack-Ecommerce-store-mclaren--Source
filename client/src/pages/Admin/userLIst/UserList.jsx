import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Metadata from "../../../Rconfig/Metadata";
import SideBar from "../siderbar/Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../../actions/userAction";
import { DELETE_USER_RESET } from "../../../constants/userConstant";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import AdNavbar from "../../../components/navbar/AdNavbar";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      toast(message);
      navigate("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, deleteError, isDeleted, message]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 80,
      flex: 0.3,
      cellClassName: (params) => {        
        const rowId = params.row.id;
        return (rowId, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
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
            <Link to={`/admin/user/${rowId}`}>
              <AiFillEdit />
            </Link>

            <Button onClick={() => deleteUserHandler(rowId)}>
              <MdAutoDelete />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <>
      <Metadata title={`ALL USERS - Admin`} />
      <AdNavbar/>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

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

export default UserList;
