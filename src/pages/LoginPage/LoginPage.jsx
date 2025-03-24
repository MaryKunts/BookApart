import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoginForm from "./content/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import "../../styles/icons";

const LoginPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/">
            <Button className={styles.headerButton}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
            </Button>
          </Link>
          <div className={styles.headerTitle}>Войдите в свой профиль</div>
        </div>
        <div className={styles.title}>Добро пожаловать в BookApart</div>
        <LoginForm />
        <Link className={styles.link} to="/signup">
          Нет аккаунта? Вы можете зарегистрироваться здесь
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
