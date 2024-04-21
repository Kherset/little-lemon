import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookingpage from "./components/pages/Bookingpage";
import Errorpage from "./components/pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reserve-a-table",
    element: <Bookingpage />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
