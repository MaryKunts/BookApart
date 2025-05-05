import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBars,
  faUser,
  faGlobe,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../routes";
import { Cart } from "./cart";
import { Dropdown } from "../dropdown/Dropdown";
import { closeCart, openCart } from "../../features/cart/cartSlice";

import styles from "./Header.module.scss";

export const Header = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();

  const { user, logOut } = useAuth();

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  const handleOpenCart = () => dispatch(openCart());

  const handleOpen = (state) => {
    if (state) {
      handleOpenCart();
    } else handleCloseCart();
  };

  useEffect(() => {
    return () => {
      closeCart();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <Link to={ROUTES.ROOT}>
          <Button className={styles.iconButton}>
            <FontAwesomeIcon
              icon={faHouseChimney}
              size="2xl"
              style={{ color: "#7c60d2" }}
            />
            <div className={styles.iconButtonTitle}>BookApart</div>
          </Button>
        </Link>
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
          {user?.username ? (
            <>
              <div className={styles.dropdownWrapper}>
                <div className={styles.dropdownUsername}>{user.username}</div>
                <div className={styles.dropdownItem}>
                  <Button onClick={logOut} className={styles.logoutButton}>
                    Выйти
                  </Button>
                </div>
              </div>
              <Cart orders={orders} />
            </>
          ) : (
            <div className={styles.dropdownWrapper}>
              <div className={styles.dropdownItem}>
                <Link to={ROUTES.SIGNUP_PAGE} className={styles.link}>
                  Зарегистрироваться
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link to={ROUTES.LOGIN_PAGE} className={styles.link}>
                  Войти
                </Link>
              </div>
            </div>
          )}
        </Dropdown>
      </div>
    </div>
  );
};
