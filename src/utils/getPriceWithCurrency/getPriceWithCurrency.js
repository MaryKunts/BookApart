import React from "react";

const getPriceWithCurrency = (amount, currency) => {
  return `${currency}${amount}`;
};

export default getPriceWithCurrency;
