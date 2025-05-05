import React from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ShareAndSaveButtons } from "../../shareAndSaveButtons";

import styles from "./ImagesModalContent.module.scss";

export const ImagesModalContent = ({ images, onClose }) => (
  <div className={styles.modal}>
    <div className={styles.modalButtons}>
      <Button className={styles.modalBack} onClick={onClose}>
        <FontAwesomeIcon icon="chevron-left" />
      </Button>
      <ShareAndSaveButtons />
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
