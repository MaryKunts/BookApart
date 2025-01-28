import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../../../../../modal/Modal";
import styles from "./InfoDescription.module.scss";

const InfoDescription = ({ description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      {description.length > 400 ? (
        <>
          <div className={styles.contentBig}>{description}</div>
          <Button
            className={styles.showMoreButton}
            onClick={() => setShowModal(true)}>
            Показать еще
            <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
          </Button>
          <Modal inProp={showModal}>
            <div className={styles.overlay}></div>
            <div className={styles.modalWrapper}>
              <div className={styles.modalHeader}>
                <Button
                  onClick={() => setShowModal(false)}
                  className={styles.closeButton}>
                  <FontAwesomeIcon icon="xmark" />
                </Button>
              </div>
              <div className={styles.modalTitle}>О жилье</div>
              <div className={styles.modalContent}>{description}</div>
            </div>
          </Modal>
        </>
      ) : (
        <div className={styles.content}>{description}</div>
      )}
    </div>
  );
};

export default InfoDescription;
