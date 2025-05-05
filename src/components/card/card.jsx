import React from "react";
import { Link } from "react-router-dom";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Slider } from "../slider";
import { getPriceWithCurrency } from "../../utils/getPriceWithCurrency";
import styles from "./Card.module.scss";

export const Card = ({ images, city, country, rating, view, price, id }) => {
  return (
    <Link to={`/rooms/${id}`} className={styles.wrapper}>
      <Slider content={images} />
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
