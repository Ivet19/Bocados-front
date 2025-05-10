import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/text-me-one/index.css";
import "@fontsource-variable/beiruti/index.css";
import AppRouter from "./router/AppRouter";
import "./styles/styles.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
);
