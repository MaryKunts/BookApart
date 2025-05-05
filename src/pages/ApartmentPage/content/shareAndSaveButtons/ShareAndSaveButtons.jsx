import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@headlessui/react";

import styles from "./ShareAndSaveButtons.module.scss";

export const ShareAndSaveButtons = () => {
  return (
    <div className={styles.wrapper}>
      <Button>
        <FontAwesomeIcon icon="arrow-up-from-bracket" />
        Поделиться
      </Button>

      <Button>
        <FontAwesomeIcon icon="fa-regular fa-heart" />
        Сохранить
      </Button>
    </div>
  );
};
