import React from "react";
import { Button } from "@headlessui/react";
import Spinner from "../spinner/Spinner";

import styles from "./ConfirmButton.module.scss";

const ConfirmButton = ({ label, onClick, loading, disabled }) => {
  return (
    <Button
      className={styles.confirmButton}
      type="submit"
      onClick={onClick}
      disabled={loading || disabled}>
      {loading ? <Spinner /> : label}
    </Button>
  );
};

export default ConfirmButton;
