import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import styles from "./Form.module.scss";

const Form = ({ children, onSubmit }) => {
  const methods = useForm({ mode: "onBlur" });
  const { reset, handleSubmit, isSubmitSuccessful } = methods;

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
