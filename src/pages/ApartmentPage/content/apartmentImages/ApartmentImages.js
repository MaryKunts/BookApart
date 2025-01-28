import React from "react";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShareAndSaveBtns from "../shareAndSaveBtns/ShareAndSaveBtns";
import Modal from "../../../../modal/Modal";
import styles from "./ApartmentImages.module.scss";

const ModalContent = ({ images, onClose }) => {
  return (
    <>
      <div className={styles.modalButtons}>
        <Button className={styles.modalBack} onClick={() => onClose()}>
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
    </>
  );
};

const ApartmentImages = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.images}>
        <img className={styles.mainImg} src={images[0]} />
        <img src={images[1]} />
        <img className={styles.rightTopImg} src={images[2]} />
        <img src={images[3]} />
        <img className={styles.rightBottomImg} src={images[4]} />
        <Button
          className={styles.showAllButton}
          onClick={() => setShowModal(true)}>
          <div className={styles.showAllButtonImages}>
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
          </div>
          Показать все фото
        </Button>
      </div>
      <Modal
        children={
          <ModalContent images={images} onClose={() => setShowModal(false)} />
        }
        inProp={showModal}
      />
    </>
  );
};

export default ApartmentImages;
