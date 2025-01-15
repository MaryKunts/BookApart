import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { accomodations } from "../../accomodationVariants/accomodationVariants";

import styles from "./AppartmentPage.module.scss";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const ApartmentPage = () => {
  const test = accomodations.find(({ id }) => id === 1);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleText}>{test.title}</div>
          <div className={styles.titleButtons}>
            <div className={styles.buttonWrapper}>
              <Button>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <div className={styles.buttonText}>Поделиться</div>
              </Button>
            </div>
            <div className={styles.buttonWrapper}>
              <Button>
                <FontAwesomeIcon icon={faHeart} />
                <div className={styles.buttonText}>Сохранить</div>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.images}>
          <div className={styles.main}>
            <img src={test.images[0]} />
          </div>
          <div className={styles.mosaic}>
            <img src={test.images[1]} />
            <img src={test.images[2]} />
            <img src={test.images[3]} />
            <img src={test.images[4]} />
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <div>{`${test.type}, ${test.city}, ${test.country}`}</div>
              <div>{`${test.maxGuest} гостей ${test.bedrooms} спальни ${test.beds} кроватей ${test.bathrooms} ванная`}</div>
            </div>
            <div className={styles.infoOwner}>{`Хозяин: ${test.owner}`}</div>
            <div className={styles.infoAdvtgs}></div>
            <div className={styles.infoDescription}></div>
          </div>
          <div className={styles.bookPannel}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentPage;
