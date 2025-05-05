import React from "react";
import { Button } from "@headlessui/react";
import { Spinner } from "../spinner";

import styles from "./ConfirmButton.module.scss";

export const ConfirmButton = ({ label, onClick, loading, disabled }) => (
  <Button
    className={styles.confirmButton}
    type="submit"
    onClick={onClick}
    disabled={loading || disabled}>
    {loading ? <Spinner /> : label}
  </Button>
);
