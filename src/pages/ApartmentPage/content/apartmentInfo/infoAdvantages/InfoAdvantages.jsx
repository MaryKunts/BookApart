import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../../../styles/icons";
import styles from "./InfoAdvantages.module.scss";

const InfoAdvantages = ({ advantages }) => {
  return (
    <div className={styles.infoAdvtgs}>
      {advantages.map((item) => {
        return (
          <div key={item.name} className={styles.infoAdvtgsItem}>
            <FontAwesomeIcon
              icon={item.icon}
              size="2xl"
              style={{ width: "32px" }}
            />
            <div className={styles.infoAdvtgsText}>
              <div className={styles.infoAdvtgsTitle}>{item.title}</div>
              <div className={styles.infoAdvtgsSubtitle}>
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoAdvantages;
