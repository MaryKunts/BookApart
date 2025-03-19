import React from "react";
import { Button } from "@headlessui/react";

import styles from "./ConfirmButton.module.scss";

const ConfirmButton = ({ label, onClick }) => {
  return (
    <Button className={styles.confirmButton} type="submit" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ConfirmButton;
