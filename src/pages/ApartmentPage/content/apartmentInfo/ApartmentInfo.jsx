import React from "react";

import UsersChoiceBar from "../usersChoiceBar/UsersChoiceBar";
import OwnerInfo from "./ownerInfo/OwnerInfo";
import InfoAdvantages from "./infoAdvantages/InfoAdvantages";
import InfoDescription from "./infoDescription/InfoDescription";

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
  const mapApartmentLabel = { usersChoice: <UsersChoiceBar rating={rating} /> };
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
      {label && mapApartmentLabel[label]}
      <OwnerInfo
        owner={owner.name}
        superowner={owner.superowner}
        period={owner.period}
      />
      <InfoAdvantages advantages={advantages} />
      <InfoDescription description={description} />
    </div>
  );
};

export default ApartmentInfo;
