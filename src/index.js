import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import NotFoundPage from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<NotFoundPage />}>
        <App />
      </Suspense>
      <ToastContainer />
    </Router>
  </React.StrictMode>
);
