import React from "react";

import styles from "./dropdown.module.scss";

const Dropdown = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>;
};

export default Dropdown;
