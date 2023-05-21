import React from "react";
import "./sidebar.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdExpandMore,
  MdImportExport,
  MdPostAdd,
  MdRateReview,
  MdViewList,
} from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={logo} alt="Ecommerce" />
        </Link>
        <Link to="/admin/dashboard">
          <p>
            <MdDashboard /> Dashboard
          </p>
        </Link>
        <Link>
          <TreeView
            defaultCollapseIcon={<MdExpandMore />}
            defaultExpandIcon={<MdViewList/>}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<MdPostAdd />} />
              </Link>

              <Link to="/admin/product">
                <TreeItem
                  nodeId="3"
                  label="Create"
                  icon={<AiOutlineAppstoreAdd />}
                />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        <Link to="/admin/orders">
          <p>
            <FaListAlt />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <BsFillPeopleFill /> Users
          </p>
        </Link>
        <Link to="/admin/reviews">
          <p>
            <MdRateReview />
            Reviews
          </p>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
