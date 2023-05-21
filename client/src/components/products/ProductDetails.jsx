import React, { useEffect, useState } from "react";
import "./product.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import Loading from "../loader/Loading";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ReviewCard from "./ReviewCard";
import Heading from "../heading/Heading";

import { ToastContainer, toast } from "react-toastify";
import Metadata from "../../Rconfig/Metadata";
import { addItemsToCart } from "../../actions/cartAction";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
} from "@mui/material";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  // submit review toggle
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  // review submit handler

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  // increase quantity
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  // decrease quantity
  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  // add to cart item
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast("Item Added To Cart");
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      toast(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      toast("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(id));
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, [dispatch, id, error, reviewError, success]);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  //
  const handleImageClick = (image) => {
    setFullscreenImage(image);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
  };
  //
  return (
    <>
      {/* <Metadata title={`${product.name} --mclaren`} /> */}
      <Navbar />
      <div id="navvisiback"></div>
      <div id="freespace"></div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div id="productdetails">
            {product && product.images && product.images.length > 0 && (
              <div id="productdetcard">
                <div id="firstcol">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Product Image ${index}`}
                      className={selectedImage === image ? "selected" : ""}
                      onClick={() => handleImageSelect(image.url)}
                    />
                  ))}
                </div>
                <div id="secondcol">
                  <img
                    className="sliderdetaprod"
                    key={product.images[0].url}
                    src={selectedImage ? selectedImage : product.images[0].url}
                    alt={`${0} Slide`}
                    onClick={() => handleImageClick(selectedImage)}
                  />
                  {isFullscreen && (
                    <div
                      className="fullscreen-overlay"
                      onClick={closeFullscreen}
                    >
                      <img src={fullscreenImage} alt="Fullscreen Image" />
                    </div>
                  )}
                </div>{" "}
                <div id="thirdcol">
                  <h2>{product.name}</h2>
                  <p>Product # {product._id}</p>

                  <Rating {...options} />
                  <div id="reviewsp">({product.numOfReviews} Reviews)</div>

                  <h1>{`₹${product.price}`}</h1>
                  <div>
                    <div id="quant">Quantity</div>
                    <button
                      onClick={decreaseQuantity}
                      style={{ borderRight: "none" }}
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      style={{ borderRight: "none", borderLeft: "none" }}
                      readOnly
                      value={quantity}
                    />
                    <button
                      onClick={increaseQuantity}
                      style={{ borderLeft: "none" }}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                    id="addtoca"
                  >
                    Add to Cart
                  </button>

                  <p>
                    {" "}
                    Status :
                    <b
                      className={product.Stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>

                  <div id="dessec">
                    Description : <p>{product.description}</p>
                  </div>

                  <button
                    onClick={submitReviewToggle}
                    id="addtoca"
                    className="submitReview"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            )}
          </div>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <Heading heading={"Reviews"} />

          {product && product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </div>
      )}
      <div id="freespace"></div>

      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  );
};

export default ProductDetails;
