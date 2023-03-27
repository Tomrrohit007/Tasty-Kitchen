import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "./components/CartContext/CartListContext";
import { HeaderProvider } from "./components/CartContext/HeaderContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderProvider>
      <ContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ContextProvider>
    </HeaderProvider>
  </React.StrictMode>
);
