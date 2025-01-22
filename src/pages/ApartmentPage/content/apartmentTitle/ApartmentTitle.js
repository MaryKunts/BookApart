import React from "react";

import ShareAndSaveBtns from "../shareAndSaveBtns/ShareAndSaveBtns";
import styles from "./ApartmentTitle.module.scss";

const ApartmentTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <div>{title}</div>
      <ShareAndSaveBtns />
    </div>
  );
};

export default ApartmentTitle;
