import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { ApartmentPage } from "./pages/ApartmentPage";
import { LoginPage } from "./pages/LoginPage";
import AuthProvider from "./context/AuthContext";
import "./config/icons";
import "./app.css";
import { ROUTES } from "./routes";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import { PrivateRoute } from "./routes/privateRoute";

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
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTES.CART_PAGE,
        element: <CartPage />,
      },
    ],
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
