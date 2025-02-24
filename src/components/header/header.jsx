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

        <Button className={styles.profileButton}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
