import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Libray from "./libray";
import Monster from "./monster";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Libray" element={<Libray />}></Route>
        <Route path="/Monster" element={<Monster />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);