import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../routes";

export const PrivateRoute = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to={ROUTES.LOGIN_PAGE} />;

  return <Outlet />;
};
