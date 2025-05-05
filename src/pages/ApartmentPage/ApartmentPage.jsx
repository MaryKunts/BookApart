import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ApartmentTitle } from "./content/apartmentTitle";
import { ApartmentImages } from "./content/apartmentImages";
import { ApartmentInfo } from "./content/apartmentInfo";
import { BookingPannel } from "./content/bookingPannel";
import { axiosInstance } from "../../config/axios";
import { Spinner } from "../../components/spinner";

import styles from "./ApartmentPage.module.scss";

export const ApartmentPage = () => {
  const params = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(false);

  const getApartment = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/houses/${params.id}`);

      if (response.data) {
        setLoading(false);
        setApartment(response.data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApartment();
  }, []);

  if (!loading && !apartment) return null;

  return (
    <div className={styles.wrapper}>
      <Header />
      {loading ? (
        <div className={styles.spinnerWrapper}>
          <Spinner width={64} height={64} />
        </div>
      ) : (
        <div className={styles.container}>
          <ApartmentTitle title={apartment.title} />
          <ApartmentImages images={apartment.images} />
          <div className={styles.infoAndBooking}>
            <ApartmentInfo
              type={apartment.type}
              city={apartment.city}
              country={apartment.country}
              maxGuest={apartment.guestInfo.maxGuest}
              bedrooms={apartment.guestInfo.bedrooms}
              label={apartment.label}
              beds={apartment.guestInfo.bedsAmount}
              bathrooms={apartment.guestInfo.bathrooms}
              rating={apartment.rating}
              owner={apartment.owner}
              advantages={apartment.advantages}
              description={apartment.description}
            />
            <BookingPannel apartment={apartment} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
