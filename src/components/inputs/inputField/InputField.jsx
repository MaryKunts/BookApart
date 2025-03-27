import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "../validationRules";
import styles from "./InputField.module.scss";

const InputField = ({
  name,
  placeholder,
  type = "text",
  required,
  rule,
  getInputValue,
  ...rest
}) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  const error = errors[name]?.message;

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...register(name, validationRules[rule])}
        {...rest}
      />
      {touchedFields[name] && error && <p className={styles.error}> {error}</p>}
    </div>
  );
};

export default InputField;
