import React, { useEffect, useState } from "react";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetUsPassword } from "../../../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../../../components/loader/Loading";
import Metadata from "../../../../Rconfig/Metadata";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";

const ResetPassword = ({match}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useParams();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetUsPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast("Password Updated Successfully");

      navigate("/login");
    }
  }, [dispatch, error, success]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Metadata title="Change Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Reset Password</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <AiOutlineUnlock color="#0076ad" />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <AiOutlineLock color="#0076ad" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
          <ToastContainer position="bottom-right" />
        </>
      )}
    </>
  );
};

export default ResetPassword;
