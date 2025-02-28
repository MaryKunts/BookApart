import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBars,
  faUser,
  faGlobe,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./cart/cart";
import Dropdown from "../dropdown/dropdown";
import styles from "./header.module.scss";
import { closeCart, openCart } from "../../features/cart/cartSlice";

const Header = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();
  console.log(orders);

  const handleOpen = () => {
    if (!isOpen) {
      dispatch(openCart());
    } else dispatch(closeCart());
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <Button className={styles.iconButton}>
            <FontAwesomeIcon
              icon={faHouseChimney}
              size="2xl"
              style={{ color: "#7c60d2" }}
            />
            <div className={styles.iconButtonTitle}>BookApart</div>
          </Button>
        </div>
        <div className={styles.settingsWrapper}>
          <Button className={styles.rentOutButton}>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className={styles.icon}
              size="2xl"
            />
          </Button>
          <Button className={styles.rentOutButtonLong}>
            Сдать жильё на BookApart
          </Button>

          <Button className={styles.languageButton}>
            <FontAwesomeIcon icon={faGlobe} size="xl" />
          </Button>

          <Button className={styles.profileButton} onClick={handleOpen}>
            <FontAwesomeIcon icon={faBars} size="lg" />
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Button>
          {isOpen ? <Dropdown children={<Cart orders={orders} />} /> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
