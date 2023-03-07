import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Monster from "./pages/monster";
import Detail from "./pages/Detail";
import Layout from "./layout";
import "./asstes/Monster.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "monster",
        element: <Monster />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
