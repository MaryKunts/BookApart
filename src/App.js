import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [{}],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
