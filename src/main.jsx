import App from "./App.jsx";
import React from "react";
import Store from "./redux/Store.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
