import React from "react";
import { accomodations } from "../../accomodationVariants/accomodationVariants";

const getAppartmentById = (id) => {

    const appartment = accomodations.find(({id}) => id === id);
    return appartment
}

export { getAppartmentById };