import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import Form from "../../../../components/form/Form";
import InputField from "../../../../components/inputs/inputField/inputField";
import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";
import ConfirmInputField from "../../../../components/inputs/confirmInputField/ConfirmInputField";
import { ROUTES } from "../../../../routes/routes";

const SignupForm = () => {
  const { signupAction, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async ({ username, email, userPassword }) => {
    await signupAction({ username, email, userPassword });
    navigate(ROUTES.ROOT);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        name="username"
        placeholder="Введите Ваше имя"
        rule="length"
      />
      <InputField
        name="email"
        placeholder="Введите Ваш email"
        rule="email"
        type="email"
      />
      <InputField
        name="userPassword"
        placeholder="Введите пароль"
        rule="password"
        type="password"
      />
      <ConfirmInputField
        name="userPasswordCheck"
        nameToMatch="userPassword"
        placeholder="Повторите пароль"
        type="password"
        message="Пароли доджны совпадать!"
      />
      <ConfirmButton label="Зарегистрироваться" loading={loading} />
    </Form>
  );
};

export default SignupForm;
