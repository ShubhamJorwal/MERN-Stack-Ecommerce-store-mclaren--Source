import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../loader/Loading";
import { clearErrors, getProduct } from "../../../actions/productAction";
import "./allproducts.scss";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import Pagination from "react-js-pagination";

import Heading from "../../heading/Heading";
import { ToastContainer, toast } from "react-toastify";
import Singproduct from "./Singproduct";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const categories = [
  "Mclaren 720s",
  "Mclaren 570s",
  "Mclaren 12c",
  "McLaren 600LT",
  "McLaren Speedtail",
];

const Allproducts = () => {
  const dispatch = useDispatch();

  const { keyword } = useParams();

  //pagination
  const [currentPage, setcurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setcurrentPage(e);
  };

  // filter
  const [price, setPrice] = useState([0, 500000]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  // categories
  const [category, setCategory] = useState("");

  // set ratings

  const [ratings, setRatings] = useState(0);

  // fetch data
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  return (
    <>
      <div id="freespace"></div>
      <Heading heading={"SHOP"} />
      {loading ? (
        <Loading />
      ) : (
        <div id="flcolecpg">
          {/* filter section */}

          <div id="filterbox" className="colscollec">
            <div id="">
              <Typography>customize price</Typography>
              <Box width={300}>
                <Slider
                  size="small"
                  value={price}
                  onChange={priceHandler}
                  aria-labelledby="range-slider"
                  min={0}
                  max={500000}
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </Box>

              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <Box width={200}>
                <div id="ratscss">
                  <Typography component="legend">Ratings Above</Typography>
                  <Slider
                    size="small"
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </div>
              </Box>
            </div>
          </div>

          {/* all prods */}
          <div className="colscollec">
            <div id="allprod">
              {products &&
                products.map((product, index) => (
                  <Singproduct key={index} product={product} />
                ))}
            </div>

            {/* pagination section */}
            {resultPerPage < productsCount && (
              <div id="pagination">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </div>
      )}
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};

export default Allproducts;
