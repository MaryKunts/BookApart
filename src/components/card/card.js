import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "../slider/slider";
import CardPreferenceBar from "../preferenceCardBar/preferenceCardBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./card.module.scss";

const Card = ({
  images,
  city,
  country,
  rating,
  view,
  dates,
  price,
  usersChoice,
  bestPrice,
  id,
}) => {
  return (
    <Link to={`/rooms/${id}`} className={styles.wrapper}>
      <CardPreferenceBar usersChoice={usersChoice} bestPrice={bestPrice} />
      <PhotoSlider content={images} />
      <div className={styles.titleBox}>
        <div>{`${city}(${country})`}</div>
        <div className={styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <div>{rating}</div>
        </div>
      </div>
      <div>{view}</div>
      <div>{dates}</div>
      <div className={styles.price}>{`${price} ночь`}</div>
    </Link>
  );
};

export default Card;
