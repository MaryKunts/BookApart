import React from "react";

import { ShareAndSaveButtons } from "../shareAndSaveButtons";

import styles from "./ApartmentTitle.module.scss";

export const ApartmentTitle = ({ title }) => (
  <div className={styles.container}>
    <div>{title}</div>
    <ShareAndSaveButtons />
  </div>
);
