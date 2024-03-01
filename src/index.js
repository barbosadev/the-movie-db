import "./index.css";
import React from "react";
import { Layout } from "./layout";
import { routes } from "./routes";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} element={route.component} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
      <Analytics />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
