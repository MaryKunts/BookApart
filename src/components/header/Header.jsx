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

import Cart from "./cart/Cart";
import Dropdown from "../dropdown/Dropdown";
import styles from "./Header.module.scss";
import { closeCart, openCart } from "../../features/cart/cartSlice";

const Header = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();

  const handleOpen = (state) => {
    if (state) {
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
          <Dropdown
            forcedOpen={isOpen}
            onStateChange={handleOpen}
            trigger={
              <Button className={styles.profileButton}>
                <FontAwesomeIcon icon={faBars} size="lg" />
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Button>
            }>
            <Cart orders={orders} />
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
