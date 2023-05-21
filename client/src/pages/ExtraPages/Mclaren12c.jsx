import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import TopBanner from "../../components/topbanner/TopBanner";
import mclaren from "../../assets/mclaren02.mp4";
import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import "./mclaren720s.scss";
import { ToastContainer } from "react-toastify";

import img01 from "../../assets/mc12c/coupe 02.jpg";
import img02 from "../../assets/mc12c/05.jpg";
// coupe
import img03 from "../../assets//mc12c/coupe 01.jpg";
import img04 from "../../assets//mc12c/coupe 02.jpg";
import img05 from "../../assets//mc12c/coupe 03.jpg";
import img06 from "../../assets//mc12c/coupe 04.jpg";
import img07 from "../../assets//mc12c/coupe 05.jpg";
import img08 from "../../assets//mc12c/coupe 06.jpg";
// spider
import img09 from "../../assets/mc12c/01.jpg";
import img10 from "../../assets/mc12c/02.jpg";
import img11 from "../../assets/mc12c/03.jpg";
import img12 from "../../assets/mc12c/04.jpg";
import img13 from "../../assets/mc12c/05.jpg";
import img14 from "../../assets/mc12c/06.jpg";
//

const Mclaren12c = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <TopBanner srcfortb={mclaren} hedfortb={"mclaren"} />
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN 12c"} />
      <div id="margin2vw"></div>
      <>
      <div id="partProducts">
        <div id="prod02">
          <img src={img01} alt="" />
          <h1>12c Coupe</h1>
          <p>RAISE YOUR LIMITS</p>
          <div id="twobtns">
            <Link to={"/product/6462b58590a19dd137748a62"}>
              <button>Shop</button>
            </Link>
            <Link to={"/collection"}>
              <button>Fetch More</button>
            </Link>
          </div>
        </div>

        <div id="prod02">
          <img src={img02} alt="" />
          <h1>12c Spider</h1>
          <p>RAISE YOUR LIMITS</p>
          <div id="twobtns">
            <Link to={"/product/6462b78a90a19dd137748b34"}>
              <button>Shop</button>
            </Link>
            <Link to={"/collection"}>
              <button>Fetch More</button>
            </Link>
          </div>
        </div>
      </div>
      {/* new section */}
      <div id="partProducts">
        <div id="prod02">
          <img
            style={{ objectFit: "cover" }}
            src="https://gaadiwaadi.com/wp-content/uploads/2017/03/McLaren-720S-7.jpg"
            alt=""
          />
          <h1 style={{ textAlign: "center" }}>12c Spider</h1>
        </div>
        <div id="prod02">
          <img
            style={{ textAlign: "center", objectFit: "cover", zoom: "80%" }}
            src="https://wallpapercave.com/wp/wp10388771.jpg"
            alt=""
          />
          <h1 style={{ textAlign: "center" }}>12c Spider</h1>
        </div>
      </div>

      {/* new section */}
      <div id="margin2vw"></div>
      <div id="borderBottom"></div>
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN 12c Coupe"} />
      <div id="margin2vw"></div>

      <div id="carsfadelook">
        <div id="coupe720">
          <img src={img04} alt="" />
        </div>
        <div id="coupe720">
          <img src={img03} alt="" />
        </div>
        <div id="coupe720">
          <img src={img05} alt="" />
        </div>
        <div id="coupe720">
          <img src={img06} alt="" />
        </div>
        <div id="coupe720">
          <img src={img07} alt="" />
        </div>
        <div id="coupe720">
          <img src={img08} alt="" />
        </div>
      </div>

      {/* new section */}
      <div id="margin2vw"></div>
      <div id="borderBottom"></div>
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN 12c Spider"} />
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

export default Mclaren12c;
