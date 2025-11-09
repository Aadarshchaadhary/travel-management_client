import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import QueryProviders from "./providers/query.provider.tsx";
import Providers from "./providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
