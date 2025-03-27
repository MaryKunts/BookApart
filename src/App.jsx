import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ApartmentPage from "./pages/ApartmentPage/ApartmentPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthProvider from "./context/AuthContext";

import "./app.css";
import { ROUTES } from "./routes/routes";
import SignupPage from "./pages/SignupPage/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: ROUTES.APARTMENT_PAGE,
    element: <ApartmentPage />,
  },
  {
    path: ROUTES.LOGIN_PAGE,
    element: <LoginPage />,
  },
  {
    path: ROUTES.SIGNUP_PAGE,
    element: <SignupPage />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
