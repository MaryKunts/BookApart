import React from "react";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../../../../modal/Modal";
import ImagesModalContent from "./imagesModalContent/ImagesModalContent";
import styles from "./ApartmentImages.module.scss";

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
      <Modal inProp={showModal}>
        <ImagesModalContent
          images={images}
          onClose={() => setShowModal(false)}
          inProp={showModal}
        />
      </Modal>
    </>
  );
};

export default ApartmentImages;
