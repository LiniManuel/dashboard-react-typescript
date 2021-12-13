import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./ui";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/applicationStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
