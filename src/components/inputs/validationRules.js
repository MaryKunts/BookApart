import { EMAIL_REGEX, PASSWORD_REGEX } from "./const";

export const validationRules = {
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
