import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import Header from "../../components/header/header";
import Content from "../../components/content/content";
import Footer from "../../components/footer/footer";

import styles from "./MainPage.module.scss";
import Spinner from "../../components/spinner/Spinner";

const MainPage = () => {
  const [accomodations, setAccomodations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHouses = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/houses");

      if (response.data) {
        setLoading(false);
        setAccomodations(response.data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {loading ? (
        <div className={styles.spinnerWrapper}>
          <Spinner height={64} width={64} />{" "}
        </div>
      ) : (
        <Content accomodations={accomodations} />
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
