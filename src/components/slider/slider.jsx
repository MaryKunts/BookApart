import React from "react";
import ReactSlider from "react-slick";

import styles from "./slider.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block", zIndex: "100", right: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block", zIndex: "100", left: 0 }}
      onClick={onClick}
    />
  );
}
export const Slider = ({ id, content }) => (
  <div className={styles.slider}>
    <ReactSlider
      {...{
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      }}>
      {content.map((item, index) => (
        <div className={styles.sliderItem} key={index}>
          <img src={item} id={id} />
        </div>
      ))}
    </ReactSlider>
  </div>
);
