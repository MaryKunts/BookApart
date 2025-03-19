import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./ConfirmInputField.module.scss";

const ConfirmInputField = ({
  name,
  nameToMatch,
  placeholder,
  type,
  message,
}) => {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();

  const error = errors[name]?.message;

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...register(name, {
          required: true,
          validate: (val) => {
            if (watch(nameToMatch) != val) {
              return message;
            }
          },
        })}
      />
      {touchedFields[name] && error && <p className={styles.error}> {error}</p>}
    </div>
  );
};

export default ConfirmInputField;
