import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { myStore } from "./Redux/reduxStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  // </React.StrictMode>
);
