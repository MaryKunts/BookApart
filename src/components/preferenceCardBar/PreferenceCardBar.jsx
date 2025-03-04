import React from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./preferenceCardBar.module.scss";

const CardPreferenceBar = (props) => {
  return (
    <div className={styles.preferenceBox}>
      {props.usersChoice ? (
        <div className={styles.preference}>Выбор гостей</div>
      ) : props.bestPrice ? (
        <div className={styles.preference}>Лучшая цена</div>
      ) : null}
      <div className={styles.heartButton}>
        <Button>
          <FontAwesomeIcon
            icon={faHeart}
            size="xl"
            style={{ color: "#fbfdfe" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default CardPreferenceBar;
