import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "../slider/slider";
import CardPreferenceBar from "../preferenceCardBar/preferenceCardBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import getPriceWithCurrency from "../../utils/getPriceWithCurrency/getPriceWithCurrency";

import styles from "./card.module.scss";

const Card = ({ images, city, country, rating, view, price, label, id }) => {
  return (
    <Link to={`/rooms/${id}`} className={styles.wrapper}>
      {/* <CardPreferenceBar usersChoice={usersChoice} bestPrice={bestPrice} /> */}
      <PhotoSlider content={images} />
      <div className={styles.titleBox}>
        <div>{`${city}(${country})`}</div>
        <div className={styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <div>{rating}</div>
        </div>
      </div>
      <div>{view}</div>
      <div className={styles.price}>
        {getPriceWithCurrency(price.amount, price.currency)} ночь
      </div>
    </Link>
  );
};

export default Card;
