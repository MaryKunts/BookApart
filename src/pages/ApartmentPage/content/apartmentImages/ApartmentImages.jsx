import React from "react";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../../../../modal/Modal";
import { useModal } from "../../../../hooks/useModal/useModal";
import ImagesModalContent from "./imagesModalContent/ImagesModalContent";
import styles from "./ApartmentImages.module.scss";

const ApartmentImages = ({ images }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={styles.images}>
        <img className={styles.mainImg} src={images[0]} />
        <img src={images[1]} />
        <img className={styles.rightTopImg} src={images[2]} />
        <img src={images[3]} />
        <img className={styles.rightBottomImg} src={images[4]} />
        <Button className={styles.showAllButton} onClick={openModal}>
          <div className={styles.showAllButtonImages}>
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
            <FontAwesomeIcon icon="ellipsis-vertical" size="sm" />
          </div>
          Показать все фото
        </Button>
      </div>
      <Modal inProp={isOpen} showOverlay={false}>
        <ImagesModalContent images={images} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default ApartmentImages;
