import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import router from "./Configs/Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
);


