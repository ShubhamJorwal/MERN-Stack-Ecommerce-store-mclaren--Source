import React from "react";
import { Link } from "react-router-dom";
import "./partProduct.scss";
import img01 from "../../assets/720S-Coupe_Fron.jpg";
import img02 from "../../assets/720S_Spider.png";
// coupe
import img03 from "../../assets/mc720/01.jpg";
import img04 from "../../assets/mc720/02.jpg";
import img05 from "../../assets/mc720/03.avif";
import img06 from "../../assets/mc720/04.webp";
import img07 from "../../assets/mc720/07.jpg";
import img08 from "../../assets/mc720/05.jpg";
// spider
import img09 from "../../assets/mc720/spider 01.jpeg";
import img10 from "../../assets/mc720/spider 02.jpg";
import img11 from "../../assets/mc720/spider 03.jpg";
import img12 from "../../assets/mc720/spider 04.jpg";
import img13 from "../../assets/mc720/spider 05.jpg";
import img14 from "../../assets/mc720/spider 06.jpg";
//
import Heading from "../heading/Heading";

const PartProduct = () => {
  return (
    <>
      <div id="partProducts">
        <div id="prod02">
          <img src={img01} alt="" />
          <h1>720S Coupe</h1>
          <p>RAISE YOUR LIMITS</p>
          <div id="twobtns">
            <Link to={"/product/646272d390a19dd13774786e"}>
              <button>Shop</button>
            </Link>
            <Link to={"/collection"}>
              <button>Fetch More</button>
            </Link>
          </div>
        </div>

        <div id="prod02">
          <img src={img02} alt="" />
          <h1>720S Spider</h1>
          <p>RAISE YOUR LIMITS</p>
          <div id="twobtns">
            <Link to={"/product/6462a65990a19dd13774809f"}>
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
          <h1 style={{ textAlign: "center" }}>720S Spider</h1>
        </div>
        <div id="prod02">
          <img
            style={{ textAlign: "center", objectFit: "cover", zoom: "80%" }}
            src="https://wallpapercave.com/wp/wp10388771.jpg"
            alt=""
          />
          <h1 style={{ textAlign: "center" }}>720S Spider</h1>
        </div>
      </div>

      {/* new section */}
      <div id="margin2vw"></div>
      <div id="borderBottom"></div>
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN 720s Coupe"} />
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
      <Heading heading={"MCLAREN 720s Spider"} />
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
  );
};

export default PartProduct;
