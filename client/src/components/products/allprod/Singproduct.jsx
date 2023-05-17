import React from "react";
import "./allproducts.scss";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Singproduct = ({product}) => {
    const options = {
     edit: false,
     activeColor: "#ffda00",
     size: window.innerWidth < 600 ? 15 : 20,
     value: product.ratings,
     isHalf: true,
    }
  return (
    <>
      <Link id="singcontprod" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div id="rstrs">
          <ReactStars {...options} /> <span>({product.numOfReviews})</span>
        </div>
        <span>{`$${product.price}`}</span>
      </Link>
    </>
  );
};

export default Singproduct;
