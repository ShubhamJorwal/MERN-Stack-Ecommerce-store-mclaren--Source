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
            src="https://tibatu.com/wp-content/uploads/2020/10/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="avatar"
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
