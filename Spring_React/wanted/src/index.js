import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/Pretendard-1.3.6/web/static/pretendard.css";
import ScrollToTop from "./pages/ScrollToTop";

import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
