import React from "react";

import UsersChoiceBar from "../usersChoiceBar/UsersChoiceBar";
import InfoOwner from "./infoOwner/InfoOwner";
import InfoAdvantages from "./infoAdvantages/InfoAdvantages";

import styles from "./ApartmentInfo.module.scss";

const ApartmentInfo = ({
  type,
  city,
  country,
  maxGuest,
  bedrooms,
  beds,
  bathrooms,
  usersChoice,
  rating,
  owner,
  superowner,
  period,
  advantages,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoTitle}>{`${type}, ${city}, ${country}`}</div>
      <div className={styles.info}>
        {`${maxGuest} гостей ${String.fromCharCode(
          8901
        )} ${bedrooms} спальни ${String.fromCharCode(
          8901
        )} ${beds} кроватей ${String.fromCharCode(8901)} ${bathrooms} ванная`}
      </div>
      {usersChoice ? <UsersChoiceBar rating={rating} /> : null}
      <InfoOwner owner={owner} superowner={superowner} period={period} />
      <InfoAdvantages advantages={advantages} />
      <div className={styles.infoDescription}>{description}</div>
    </div>
  );
};

export default ApartmentInfo;
