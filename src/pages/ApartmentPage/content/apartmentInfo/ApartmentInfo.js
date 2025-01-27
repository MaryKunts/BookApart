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
  label,
  rating,
  owner,
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
      {label === "usersChoice" ? <UsersChoiceBar rating={rating} /> : null}
      <InfoOwner
        owner={owner.name}
        superowner={owner.superowner}
        period={owner.period}
      />
      <InfoAdvantages advantages={advantages} />
      <div className={styles.infoDescription}>{description}</div>
    </div>
  );
};

export default ApartmentInfo;
