import React from "react";

import Form from "../../../../components/form/Form";
import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";
import InputField from "../../../../components/inputs/inputField/inputField";

const LoginForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={(data) => onSubmit(data)}>
      <InputField
        name="userEmail"
        placeholder="Введите email"
        type="email"
        rule="email"
      />
      <InputField
        name="userPassword"
        placeholder="Введите пароль"
        rule="required"
        type="password"
      />
      <ConfirmButton label="Войти" />
    </Form>
  );
};

export default LoginForm;
