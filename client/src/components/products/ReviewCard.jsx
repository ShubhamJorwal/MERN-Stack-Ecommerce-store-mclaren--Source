import React from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";

const ReviewCard = ({ review }) => {
  const options = {
    readOnly: true,
    precision: 0.5,
    value: review.rating,
    color: "#847d7d",
    activeColor: "#03a9f4",
    edit: false,
  };
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="reviewCard">
        <div id="firstdivca">
          <img style={{width:"3vw" , height:"3vw"}}
            id="revcardimg"
            src={user.avatar.url} alt={user.name}
          />
          <p className="namerev">{review.name}</p>
          <ReactStars {...options} />
        </div>
        <p className="reviewCardComment">{review.comment}</p>
      </div>
    </>
  );
};

export default ReviewCard;
