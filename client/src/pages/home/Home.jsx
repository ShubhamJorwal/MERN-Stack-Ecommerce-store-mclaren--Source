import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeSlider from "./slider/HomeSlider";
import FeaturedProd from "../../components/products/FeaturedProd";
import Metadata from "../../Rconfig/Metadata";
// import { useEffect } from "react";
// import { loadUser } from "../../actions/userAction";
// import store from "../../store";




const Home = () => {

  // useEffect(() => {

  //   store.dispatch(loadUser());

  // }, []);

  return (
    <>
      <Metadata title={"ECOMMERCE"} />
      <Navbar />
      <HomeSlider />
      <FeaturedProd />
      <Footer />
    </>
  );
};

export default Home;
