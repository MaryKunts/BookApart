import React from "react";

import { OwnerInfo } from "./ownerInfo";
import { InfoAdvantages } from "./infoAdvantages";
import { InfoDescription } from "./infoDescription";
import { getTitle } from "../../../../utils/getTitle";
import { UsersChoiceBar } from "../usersChoiceBar";

import styles from "./ApartmentInfo.module.scss";

export const ApartmentInfo = ({
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
      <div className={styles.infoTitle}>{getTitle(type, city, country)}</div>
      <div className={styles.info}>
        {`${maxGuest} гостей ${String.fromCharCode(
          8901
        )} ${bedrooms} спальни ${String.fromCharCode(
          8901
        )} ${beds} кроватей ${String.fromCharCode(8901)} ${bathrooms} ванная`}
      </div>
      {label && mapApartmentLabel[label]}
      <OwnerInfo
        owner={owner.username}
        superowner={owner.ownerInfo.isSuperOwner}
        period={owner.ownerInfo.period}
      />
      <InfoAdvantages advantages={advantages} />
      <InfoDescription description={description} />
    </div>
  );
};
