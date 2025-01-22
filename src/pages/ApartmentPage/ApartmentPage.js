import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { accomodations } from "../../accomodationVariants/accomodationVariants";
import "../../styles/icons";
import styles from "./ApartmentPage.module.scss";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import ApartmentTitle from "./content/apartmentTitle/ApartmentTitle";
import ApartmentImages from "./content/apartmentImages/ApartmentImages";
import ApartmentInfo from "./content/apartmentInfo/ApartmentInfo";

const ApartmentPage = () => {
  const params = useParams();
  const apartment = accomodations.find(({ id }) => id === Number(params.id));

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <ApartmentTitle title={apartment.title} />
        <ApartmentImages images={apartment.images} />
        <ApartmentInfo
          type={apartment.type}
          city={apartment.city}
          country={apartment.country}
          maxGuest={apartment.maxGuest}
          bedrooms={apartment.bedrooms}
          beds={apartment.beds}
          bathrooms={apartment.bathrooms}
          usersChoice={apartment.usersChoice}
          rating={apartment.rating}
          owner={apartment.owner}
          superowner={apartment.superowner}
          period={apartment.period}
          advantages={apartment.advantages}
          description={apartment.description}
        />
        <div className={styles.bookPannel}></div>
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentPage;
