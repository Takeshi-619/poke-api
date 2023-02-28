import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Monster from "./pages/monster";
import Detail from "./pages/Detail";
import "./asstes/Monster.scss";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "monster", element: <Monster /> },
      { path: "detail", element: <Detail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
