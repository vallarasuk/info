import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core"; // Import Font Awesome library
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import Font Awesome brand icons
import "animate.css"; // Import Animate.css styles
import "./Components/Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppMain from "./AppMain";
import AppOne from "./AppOne";

// Add Font Awesome brand icons to the library
library.add(fab);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppOne /> */}
    <AppMain />
  </React.StrictMode>,
  document.getElementById("root")
);
