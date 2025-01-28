import React from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBars,
  faUser,
  faGlobe,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.scss";

const Header = () => {
  return (
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
        <div className={styles.rentOutButtonWrapper}>
          <Button className={styles.rentOutButton}>
            <FontAwesomeIcon
              className={styles.rentOutButtonIcon}
              icon={faMoneyBill}
              size="xl"
              style={{ color: "#4a4c4f" }}
            />
            <div className={styles.rentOutButtonTitle}>
              Сдать жильё на BookApart
            </div>
          </Button>
        </div>
        <div className={styles.languageButtonWrapper}>
          <Button className={styles.languageButton}>
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: "#4a4c4f" }}
              size="xl"
            />
          </Button>
        </div>
        <div className={styles.profileButtonWrapper}>
          <Button className={styles.profileButton}>
            <div className={styles.profileMenu}>
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                style={{ color: "#4a4c4f" }}
              />
            </div>
            <div className={styles.profileIcon}>
              <FontAwesomeIcon
                icon={faUser}
                size="xl"
                style={{ color: "#4a4c4f" }}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
