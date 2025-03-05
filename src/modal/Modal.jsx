import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

import { useClickOutside } from "../hooks/useClickOutside/useClickOutside";
import styles from "./Modal.module.scss";

const Modal = ({ children, inProp, showOverlay, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (inProp) {
      document.body.classList.add("scroll-hidden");
    }

    return () => {
      document.body.classList.remove("scroll-hidden");
    };
  }, [inProp]);

  closeModal && useClickOutside(modalRef, closeModal);

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
        {showOverlay ? <div className={styles.overlay}></div> : null}
        {children}
      </div>
    </CSSTransition>,
    document.body
  );
};

export default Modal;
