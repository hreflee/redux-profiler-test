import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import App from "./App.jsx";
import Helper from "./Helper";

const store = storeFactory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Helper />
  </Provider>,
  rootElement
);
