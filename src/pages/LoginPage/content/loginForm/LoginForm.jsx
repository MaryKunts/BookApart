import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="Введите email"
          {...register("userEmail", {
            required: "Обязательно поле",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный email адрес",
            },
          })}
          type="email"
        />

        {touchedFields.userEmail && errors.userEmail?.message && (
          <p className={styles.error}> {errors.userEmail?.message}</p>
        )}
        <input
          className={styles.input}
          placeholder="Введите пароль"
          {...register("userPassword", { required: true })}
          type="password"
        />
        {touchedFields.userPassword && errors.userPassword?.message && (
          <p className={styles.error}>{errors.userPassword?.message}</p>
        )}
        <ConfirmButton content="Войти" />
      </form>
    </>
  );
};

export default LoginForm;
