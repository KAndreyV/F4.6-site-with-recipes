import React from "react";
import ReactDom from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./components/App";
import Categories from "./components/Categories";
import ErrorPage from "./components/Error-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
    );