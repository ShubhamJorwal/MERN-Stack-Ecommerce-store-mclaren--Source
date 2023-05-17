import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import TopBanner from "../../components/topbanner/TopBanner";
import mclaren from "../../assets/mclaren01.mp4";
import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import "./mclaren720s.scss";
import { ToastContainer } from "react-toastify";

import img01 from "../../assets/mcspeedtail/06.jpg";
// 
import img09 from "../../assets/mcspeedtail/01.jpg";
import img10 from "../../assets/mcspeedtail/02.jpg";
import img11 from "../../assets/mcspeedtail/03.jpg";
import img12 from "../../assets/mcspeedtail/04.jpeg";
import img13 from "../../assets/mcspeedtail/05.jpg";
import img14 from "../../assets/mcspeedtail/06.jpg";
//

const MclarenSpeedtail = () => {
  return (
    <>
      <Navbar />
      <TopBanner srcfortb={mclaren} hedfortb={"mclaren"} />
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN SPEED_TAIL"} />
      <div id="margin2vw"></div>
      <>
      <div id="partProducts">
        <div id="prod02">
          <img src={img01} alt="" />
          <h1>SPEED_TAIL Coupe</h1>
          <p>RAISE YOUR LIMITS</p>
          <div id="twobtns">
            <Link to={"/product/6462bfcd90a19dd137749208"}>
              <button>Shop</button>
            </Link>
            <Link to={"/collection"}>
              <button>Fetch More</button>
            </Link>
          </div>
        </div>

      </div>


      {/* new section */}
      <div id="margin2vw"></div>
      <div id="borderBottom"></div>
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN SPEED_TAIL "} />
      <div id="margin2vw"></div>

      <div id="carsfadelook">
        <div id="coupe720">
          <img src={img09} alt="" />
        </div>
        <div id="coupe720">
          <img src={img10} alt="" />
        </div>
        <div id="coupe720">
          <img src={img11} alt="" />
        </div>
        <div id="coupe720">
          <img src={img12} alt="" />
        </div>
        <div id="coupe720">
          <img src={img13} alt="" />
        </div>
        <div id="coupe720">
          <img src={img14} alt="" />
        </div>
      </div>

      <div id="margin2vw"></div>
      <div id="borderBottom"></div>
      <div id="margin2vw"></div>
    </>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MclarenSpeedtail;

