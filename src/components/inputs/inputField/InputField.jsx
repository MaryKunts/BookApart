import React from "react";
import { useFormContext } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "./const";

import styles from "./InputField.module.scss";

const validationRules = {
  email: {
    pattern: {
      value: EMAIL_REGEX,
      message: "Неверный email адрес",
    },
    required: "Обязательное поле",
  },
  length: {
    minLength: {
      value: 2,
      message: "Минимальное количество символов 2",
    },

    maxLength: {
      value: 20,
      message: "Максимальное количество символов 20",
    },
    required: "Обязательное поле",
  },
  required: {
    required: "Обязательное поле",
  },
  password: {
    pattern: {
      value: PASSWORD_REGEX,
      message:
        "Пароль должен содержать 1 заглавную букву, 1 спецсимвол и 1 цифру",
    },
    required: "Обязательное поле",
  },
};

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
