import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";
import AppartmentPage from "./pages/AppartmentPage/AppartmentPage";

import "./app.css";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: ROUTES.HOUSE_PAGE,
    element: <AppartmentPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
