import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SignupForm } from "./content/signupForm";

import styles from "./SignupPage.module.scss";

export const SignupPage = () => {
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
          <div className={styles.headerTitle}>Добро пожаловать в BookApart</div>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};
