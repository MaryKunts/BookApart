import React from "react";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShareAndSaveBtns from "../../shareAndSaveBtns/ShareAndSaveBtns";
import styles from "./ImagesModalContent.module.scss";

const ImagesModalContent = ({ images, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalButtons}>
        <Button className={styles.modalBack} onClick={onClose}>
          <FontAwesomeIcon icon="chevron-left" />
        </Button>
        <ShareAndSaveBtns />
      </div>
      <div className={styles.modalContent}>
        {images.map((item, i) => {
          if (i === 0 || i % 3 === 0) {
            return <img className={styles.modalContentBig} src={item} />;
          } else return <img src={item} />;
        })}
      </div>
    </div>
  );
};
export default ImagesModalContent;
