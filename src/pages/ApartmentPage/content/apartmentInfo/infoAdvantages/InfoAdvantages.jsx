import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./InfoAdvantages.module.scss";

export const InfoAdvantages = ({ advantages }) => (
  <div className={styles.infoAdvtgs}>
    {advantages.map((item) => {
      return (
        <div key={item.title} className={styles.infoAdvtgsItem}>
          <FontAwesomeIcon
            icon={item.icon}
            size="2xl"
            style={{ width: "32px" }}
          />
          <div className={styles.infoAdvtgsText}>
            <div className={styles.infoAdvtgsTitle}>{item.title}</div>
            <div className={styles.infoAdvtgsSubtitle}>{item.description}</div>
          </div>
        </div>
      );
    })}
  </div>
);
