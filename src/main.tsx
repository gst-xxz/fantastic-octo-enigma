import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FeaturesProvider } from "./features/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeaturesProvider>
      <App />
    </FeaturesProvider>
  </StrictMode>
);
