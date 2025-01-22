import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";
import ApartmentPage from "./pages/ApartmentPage/ApartmentPage";

import "./app.css";
import { ROUTES } from "./routes/routes";

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
