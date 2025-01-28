import React from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body
  );
};

export default Modal;
