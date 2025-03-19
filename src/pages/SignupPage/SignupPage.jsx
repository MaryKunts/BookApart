import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SignupPage.module.scss";
import "../../styles/icons";
import SignupForm from "./content/signupForm/SignupForm";

const SignupPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/">
            <Button className={styles.headerButton}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
            </Button>
          </Link>
          <div className={styles.headerTitle}>Добро пожаловать в BookApart</div>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
