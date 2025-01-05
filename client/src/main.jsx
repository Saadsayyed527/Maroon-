import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./components/NotFound";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={NotFound}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
