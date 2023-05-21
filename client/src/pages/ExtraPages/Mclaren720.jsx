import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import TopBanner from "../../components/topbanner/TopBanner";
import mclaren from "../../assets/mclaren01.mp4";
import Heading from "../../components/heading/Heading";
import Footer from "../../components/footer/Footer";
import "./mclaren720s.scss";
import { ToastContainer, toast } from "react-toastify";
import PartProduct from "../../components/partProduct/PartProduct";

const Mclaren = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <TopBanner srcfortb={mclaren} hedfortb={"mclaren"} />
      <div id="margin2vw"></div>
      <Heading heading={"MCLAREN 720s"} />
      <div id="margin2vw"></div>
      <PartProduct />

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Mclaren;
