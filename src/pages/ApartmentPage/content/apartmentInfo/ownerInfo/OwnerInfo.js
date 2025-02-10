import React from "react";

import styles from "./OwnerInfo.module.scss";

const OwnerInfo = ({ owner, period, superowner }) => {
  return (
    <div className={styles.infoOwner}>
      <div className={styles.infoOwnerTitle}>{`Хозяин: ${owner}`}</div>
      <div className={styles.infoOwnerSubtitleWrapper}>
        {superowner ? (
          <div
            className={
              styles.infoOwnerSubtitle
            }>{`Суперхозяин ${String.fromCharCode(8901)}`}</div>
        ) : null}
        <div
          className={
            styles.infoOwnerSubtitle
          }>{`${period} принимает гостей `}</div>
      </div>
    </div>
  );
};

export default OwnerInfo;
