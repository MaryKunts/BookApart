import React from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Modal } from "../../../../../components/modal";
import { useModal } from "../../../../../hooks/useModal";

import styles from "./InfoDescription.module.scss";

export const InfoDescription = ({ description }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.wrapper}>
      {description.length > 400 ? (
        <>
          <div className={styles.content}>{description}</div>
          <Button className={styles.showMoreButton} onClick={openModal}>
            Показать еще
            <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
          </Button>
          <Modal inProp={isOpen} showOverlay={true} closeModal={closeModal}>
            <div className={styles.modalWrapper}>
              <div className={styles.modalHeader}>
                <Button onClick={closeModal} className={styles.closeButton}>
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
