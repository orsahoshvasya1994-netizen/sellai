import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import "./index.css";

import { SubscriptionProvider } from "./components/context/SubscriptionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SubscriptionProvider>
        <App />
        <Analytics />
      </SubscriptionProvider>
    </BrowserRouter>
  </React.StrictMode>
);