import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Program } from "./pages/program";
import { SearchPage } from "./pages/search";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { routes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} element={route.component} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
