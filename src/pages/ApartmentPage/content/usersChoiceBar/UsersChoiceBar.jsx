import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

import styles from "./UsersChoiceBar.module.scss";

export const UsersChoiceBar = ({ rating }) => {
  return (
    <div className={styles.usersChoiceWrapper}>
      <div className={styles.usersChoiceLogo}>
        <FontAwesomeIcon icon={faPagelines} flip="horizontal" size="2xl" />
        <div>Выбор гостей</div>
        <FontAwesomeIcon icon={faPagelines} size="2xl" />
      </div>
      <div className={styles.usersChoiceTitle}>
        Это жилье {String.fromCharCode(8212)} одно из самых любимых у гостей на
        BookApart
      </div>
      <div className={styles.usersChoiceRate}>
        {rating}
        <div className={styles.usersChoiceRateImg}>
          <FontAwesomeIcon icon={faStar} size="2xs" />
          <FontAwesomeIcon icon={faStar} size="2xs" />
          <FontAwesomeIcon icon={faStar} size="2xs" />
          <FontAwesomeIcon icon={faStar} size="2xs" />
          <FontAwesomeIcon icon={faStar} size="2xs" />
        </div>
      </div>
    </div>
  );
};
