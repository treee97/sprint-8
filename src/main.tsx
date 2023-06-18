import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import Starships from "./pages/Starships/Starships.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
