import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@headlessui/react";

import { Header } from "../../components/header";
import { getTitle } from "../../utils/getTitle";
import { Footer } from "../../components/footer";
import { deleteOrder } from "../../features/cart/cartSlice";

import styles from "./CartPage.module.scss";

export const CartPage = () => {
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.title}>Активные заказы</div>
        {orders.length ? (
          orders.map((item) => {
            return (
              <div className={styles.cartItemWrapper} key={item.orderId}>
                <div className={styles.image}>
                  <img src={item.images[0]} alt="" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionTitleWrapper}>
                    <Link
                      to={`/rooms/${item.houseId}`}
                      replace
                      className={styles.descriptionTitle}>
                      {getTitle(item.type, item.city, item.country)}
                    </Link>
                    <Button
                      className={styles.declineButton}
                      onClick={() =>
                        dispatch(deleteOrder({ orderId: item.orderId }))
                      }>
                      <FontAwesomeIcon icon="fa-xmark" />
                    </Button>
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
          })
        ) : (
          <div className={styles.empty}>Активных заказов нет</div>
        )}
      </div>
      <Footer />
    </div>
  );
};
