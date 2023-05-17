import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  MdAccountCircle,
  MdDeliveryDining,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <MdOutlineDashboardCustomize />, name: "Dashboard", route: "/admin/dashboard" },
  { icon: <MdDeliveryDining />, name: "Orders", route: "/admin/orders" },
  { icon: <MdAccountCircle />, name: "Account", route: "/account" },
  { icon: <AiOutlineShoppingCart />, name: "Cart", route: "/cart" },
  //   { icon: <AiOutlineLogout />, name: "Logout" },
];

export default function AdNavbar() {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleIconClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div id="adnavbar">
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            transform: "translateZ(0px) rotate(180deg)",
          }}
          icon={
            <img
              className="spdialmainicon"
              src={user && user.avatar.url ? user.avatar.url : "/Profile.png"}
              alt="Profile"
            />
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              onClick={() => handleIconClick(action.route)}
              className="speedDialIcon"
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
