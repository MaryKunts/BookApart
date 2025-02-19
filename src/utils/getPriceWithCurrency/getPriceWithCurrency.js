import React from "react";

const getPriceWithCurrency = (amount, currency) => {
  return <span> {`${currency}${amount}`}</span>;
};

export default getPriceWithCurrency;
