import React from "react";
import "./topbanner.scss";

const TopBanner = ({ srcfortb,hedfortb }) => {
  return (
    <>
      <div id="topbanner">
        <div id="blackdiv"></div>
        <video src={srcfortb} autoPlay muted loop></video>
        <div>
          <h1>{hedfortb}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
