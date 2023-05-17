import React, { useEffect, useState } from "react";
import "./profile.scss";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotUsPassword } from "../../../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../../../components/loader/Loading";
import Metadata from "../../../../Rconfig/Metadata";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotUsPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast(message);
    }
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Metadata title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <AiOutlineMail />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
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

export default ForgotPassword;
