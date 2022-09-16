import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Tree } from "./tree";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

window.addEventListener("DOMContentLoaded", () => {
  new Tree("canvas");
});

reportWebVitals();
