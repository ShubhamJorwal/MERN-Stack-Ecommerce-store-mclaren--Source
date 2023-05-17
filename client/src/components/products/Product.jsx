import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./product.scss";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "#847d7d",
    activeColor: "#03a9f4",
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div id="ratinspro">
          <ReactStars {...options} /> <span>({product.numOfReviews})</span>
        </div>
        <span>{`$${product.price}`}</span>
      </Link>
    </>
  );
};

export default Product;
