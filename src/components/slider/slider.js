import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./slider.module.scss";

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
const PhotoSlider = (props) => {
  return (
    <div className={styles.slider}>
      <Slider
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
        {props.content.map((item) => (
          <div className={styles.sliderItem}>
            <img src={item} id={props.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
