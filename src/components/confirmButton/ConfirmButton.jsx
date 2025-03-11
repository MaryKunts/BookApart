import React from "react";
import { Button } from "@headlessui/react";

import styles from "./ConfirmButton.module.scss";

const ConfirmButton = ({ content, onClick }) => {
  return (
    <Button className={styles.confirmButton} type="submit" onClick={onClick}>
      {content}
    </Button>
  );
};

export default ConfirmButton;
