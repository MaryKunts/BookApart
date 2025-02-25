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
import BookingPannel from "./content/bookingPannel/BookingPannel";

const ApartmentPage = () => {
  const params = useParams();
  const apartment = accomodations.find(({ id }) => id === Number(params.id));

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <ApartmentTitle title={apartment.title} />
        <ApartmentImages images={apartment.images} />
        <div className={styles.infoAndBooking}>
          <ApartmentInfo
            type={apartment.type}
            city={apartment.city}
            country={apartment.country}
            maxGuest={apartment.maxGuest}
            bedrooms={apartment.bedrooms}
            label={apartment.label}
            beds={apartment.beds}
            bathrooms={apartment.bathrooms}
            rating={apartment.rating}
            owner={apartment.owner}
            advantages={apartment.advantages}
            description={apartment.description}
          />
          <BookingPannel price={apartment.price} orders={apartment.orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentPage;
