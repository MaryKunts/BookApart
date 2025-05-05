import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../routes";
import { getTitle } from "../../../utils/getTitle";

import styles from "./Cart.module.scss";

export const Cart = ({ orders }) => {
  if (!orders.length) {
    return <div className={styles.empty}>Корзина пуста</div>;
  }

  return (
    <>
      <div className={styles.title}>Ваши заказы</div>
      {orders.map((item) => {
        return (
          <Link
            to={ROUTES.CART_PAGE}
            className={styles.container}
            key={item.orderId}>
            <div className={styles.image}>
              <img src={item.images[0]} alt="" />
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTitle}>
                {getTitle(item.type, item.city, item.country)}
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
          </Link>
        );
      })}
    </>
  );
};
