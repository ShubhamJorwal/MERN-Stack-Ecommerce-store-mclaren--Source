import React from "react";
import "./homeslider.scss";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <>
      <div id="homesli">
        <div id="topblacklay"></div>
        <div className="cont-slider">
          <section className="slider">
            <article className="slide one">
              <span className="slide01">
                Unleash Your Inner <br /> Speed Demon
              </span>
              <Link className="butnn slide01" to="/collection">
                Explore
              </Link>
            </article>
            <article className="slide two">
              <span className="slide02"> Exhilaration Redefined</span>
              <Link className="butnn slide02" to="/collection">
                Explore
              </Link>
            </article>
            <article className="slide three">
              <span className="slide03">
                Performance Elevated, <br /> Limits Shattered
              </span>
              <Link id="expfac" className="butnn slide03" to="/collection">
                Explore
              </Link>
            </article>
            <article className="slide four">
              <span className="slide04">Where Luxury Meets Velocity</span>
              <Link className="butnn slide04" to="/collection">
                Explore
              </Link>
            </article>
            <article className="slide five">
              <span className="slide05">
                Engineered for Thrills, <br /> Designed for Prestige
              </span>
              <Link className="butnn slide05" to="/collection">
                Explore
              </Link>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
