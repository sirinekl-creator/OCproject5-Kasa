// Ce fichier ne sert qu'à démarrer react

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);