import React from "react";

import { accomodations } from "../../../accomodationVariants/accomodationVariants";
import getTitle from "../../../utils/getTitle/getTitle";

import styles from "./Cart.module.scss";

const Cart = ({ orders }) => {
  if (!orders.length) {
    return <div className={styles.empty}>Корзина пуста</div>;
  }
  return (
    <>
      <div className={styles.title}>Ваши заказы</div>
      {orders.map((item) => {
        const apartment = accomodations.find(
          (apart) => apart.id === Number(item.apartmentId)
        );
        return (
          <div className={styles.container}>
            <div className={styles.image}>
              <img src={apartment.images[0]} alt="" />
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTitle}>
                {getTitle(apartment.type, apartment.city, apartment.country)}
              </div>
              <div className={styles.descriptionDate}>
                {`${item.term[0]} - ${item.term[1]}`}
              </div>
              <div
                className={
                  styles.descriptionNights
                }>{`${item.length} ночей`}</div>
              <div className={styles.descriptionPrice}>{item.price}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
