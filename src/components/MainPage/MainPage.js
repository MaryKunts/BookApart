import React from "react";

import Header from "../header/header";
import Content from "../content/content";
import Footer from "../footer/footer";
import { accomodations } from "../../accomodationVariants/accomodationVariants";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content accomodations={accomodations} />
      <Footer />
    </div>
  );
};

export default MainPage;
