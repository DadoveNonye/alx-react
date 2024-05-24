import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Notifications from "./Notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById("root-notifications")
// );

reportWebVitals();
