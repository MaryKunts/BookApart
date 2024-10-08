import React from "react";
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
  type,
  dates,
  price,
  usersChoice,
  bestPrice,
}) => {
  return (
    <div className={styles.wrapper}>
      <CardPreferenceBar usersChoice={usersChoice} bestPrice={bestPrice} />
      <PhotoSlider content={images} />
      <div className={styles.titleBox}>
        <div>{`${city}(${country})`}</div>
        <div className={styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <div>{rating}</div>
        </div>
      </div>
      <div>{type}</div>
      <div>{dates}</div>
      <div className={styles.price}>{`${price} ночь`}</div>
    </div>
  );
};

export default Card;
