import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./Modal.module.scss";

const Modal = ({ children, inProp }) => {
  useEffect(() => {
    document.body.classList.add("scroll-hidden");

    return () => {
      document.body.classList.remove("scroll-hidden");
    };
  }, []);

  const modalRef = useRef(null);

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={inProp}
      timeout={1200}
      mountOnEnter
      unmountOnExit
      exit
      classNames={{ ...styles }}>
      <div ref={modalRef} className={styles.modal}>
        {children}
      </div>
    </CSSTransition>,
    document.body
  );
};

export default Modal;
