import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../context/AuthContext";
import { Form } from "../../../../components/form";
import { ConfirmButton } from "../../../../components/confirmButton";
import { InputField } from "../../../../components/inputs/inputField";

export const LoginForm = () => {
  const { loginAction, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, userPassword }) => {
    await loginAction({ email, userPassword });

    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        name="email"
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
      <ConfirmButton label="Войти" loading={loading} />
    </Form>
  );
};
