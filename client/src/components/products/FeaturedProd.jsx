import React, { useEffect } from "react";
import "./featuredprod.scss";
import Product from "./Product";
import Loading from "../loader/Loading";
import Heading from "../heading/Heading";

import { clearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

const FeaturedProd = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  const { loading, products, productsCount } = useSelector(
    (state) => state.products
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="featurepro">
          <div id="mainhead">
      <div id="freespace"></div>
            <Heading heading={"FEATURED PRODUCTS"} />
      <div id="freespace"></div>
          </div>
          <div id="prodcontain">
            {products &&
              products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
        </div>
      )}
      <div id="freespace"></div>
      <div id="freespace"></div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default FeaturedProd;
