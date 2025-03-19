import React from "react";

import Form from "../../../../components/form/Form";
import InputField from "../../../../components/inputs/inputField/inputField";
import ConfirmButton from "../../../../components/confirmButton/ConfirmButton";
import ConfirmInputField from "../../../../components/inputs/confirmInputField/ConfirmInputField";

const SignupForm = () => {
  return (
    <Form onSubmit={() => console.log("Success")}>
      <InputField
        name="userName"
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
      <ConfirmButton label="Зарегистрироваться" />
    </Form>
  );
};

export default SignupForm;
