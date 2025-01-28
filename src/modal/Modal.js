import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const Modal = ({ children, inProp }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (inProp) {
      document.body.classList.add("scroll-hidden");
    }

    return () => {
      document.body.classList.remove("scroll-hidden");
    };
  }, [inProp]);

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={inProp}
      timeout={300}
      mountOnEnter
      unmountOnExit
      exit
      classNames={{ ...styles }}>
      <div ref={modalRef} className={styles.modalContainer}>
        {children}
      </div>
    </CSSTransition>,
    document.body
  );
};

export default Modal;
