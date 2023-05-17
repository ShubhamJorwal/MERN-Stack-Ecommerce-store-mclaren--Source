import React from "react";
import "./heading.scss";

const Heading = ({ heading }) => {
  return (
    <>
      <div id="headingforeach">
        <h1>{heading}</h1>
      </div>
    </>
  );
};

export default Heading;
