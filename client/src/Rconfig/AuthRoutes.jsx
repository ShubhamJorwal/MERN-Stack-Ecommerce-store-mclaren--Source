import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRouteForAdmin = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  if (user && user.role !== "admin" && isAuthenticated) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export const ProtectedRouteForUser = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};
