import React from "react";
import Card from "../card/card";

import styles from "./content.module.scss";

const Content = ({ accomodations }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {accomodations.map((item) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              city={item.city}
              country={item.country}
              rating={item.rating}
              dates={item.dates}
              view={item.view}
              price={item.price}
              images={item.images}
              bestPrice={item.bestPrice}
              usersChoice={item.usersChoice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
