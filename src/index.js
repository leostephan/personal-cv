import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
