import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ROUTES } from "../../routes/routes";
import LoginForm from "./content/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import "../../styles/icons";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link onClick={() => navigate(-1)}>
            <Button className={styles.headerButton}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
            </Button>
          </Link>
          <div className={styles.headerTitle}>Войдите в свой профиль</div>
        </div>
        <div className={styles.title}>Добро пожаловать в BookApart</div>
        <LoginForm />
        <Link className={styles.link} to={ROUTES.SIGNUP_PAGE}>
          Нет аккаунта? Вы можете зарегистрироваться здесь
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
