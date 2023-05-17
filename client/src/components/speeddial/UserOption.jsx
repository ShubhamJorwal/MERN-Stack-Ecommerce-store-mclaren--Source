import React from "react";
import "./useroption.scss";
import { Link } from "react-router-dom";

const UserOption = ({ user }) => {
  return (
    <>
      <Link id="usrloggedinac" to="/account">
        <img
          src={
            user.avatar.url
              ? user.avatar.url
              : "https://e1.pngegg.com/pngimages/976/873/png-clipart-orb-os-x-icon-man-s-profile-icon-inside-white-circle.png"
          }
          alt="profile"
        />
      </Link>
    </>
  );
};

export default UserOption;
