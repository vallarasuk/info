// src/index.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import AppMain from "./AppMain";
import "./Components/Styles/App.css";

// Add Font Awesome brand icons to the library
library.add(fab);

// Get the root element where the React app will be mounted
const container = document.getElementById("root");

// Create a root and render the AppMain component
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);
