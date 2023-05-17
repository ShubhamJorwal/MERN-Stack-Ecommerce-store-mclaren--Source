import React from "react";
import "./myaccount.scss";
import Navbar from "../../../components/navbar/Navbar";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import Loading from "../../../components/loader/Loading";

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
    toast("Sign-out Successfully");
  };
  return (
    <>
      {!isAuthenticated ? (
        navigate("/login")
      ) : (
        <>
          <Navbar />
          <div id="covnav"></div>
          <div id="logoutuser" onClick={logoutUser}>
            <AiOutlineLogout size={"1.4vw"} color={"#03a9f4"} />{" "}
            <span>SIGN-OUT</span>
          </div>
          <Profile />
          <ToastContainer position="bottom-right" />
        </>
      )}
    </>
  );
};

export default MyAccount;
