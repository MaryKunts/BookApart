import React from "react";

import { accomodations } from "../../../accomodationVariants/accomodationVariants";
import getTitle from "../../../utils/getTitle/getTitle";

import styles from "./cart.module.scss";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../../const/dates";

const Cart = ({ id, term, length, price }) => {
  const apartment = accomodations.find(
    ({ id: accomodationId }) => accomodationId === Number(id)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Ваши заказы</div>
      {id ? (
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={apartment.images[0]} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.descriptionTitle}>
              {getTitle(apartment.type, apartment.city, apartment.country)}
            </div>
            <div className={styles.descriptionDate}>
              {`${dayjs(term[0]).format(DATE_FORMAT)} - ${dayjs(term[1]).format(
                DATE_FORMAT
              )}`}
            </div>
            <div className={styles.descriptionNights}>{`${length} ночей`}</div>
            <div className={styles.descriptionPrice}>{price}</div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>Корзина пуста</div>
      )}
    </div>
  );
};

export default Cart;
