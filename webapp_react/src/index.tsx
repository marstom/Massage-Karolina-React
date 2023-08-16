import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { colors } from "ui/palette";

import { createGlobalStyle } from "styled-components";
import "index.css";

import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";
import * as process from "process";
import { router } from "router";

// Mocks instead real API
console.log(`Process env ${process.env.REACT_APP_MSW_MOCK}`);
if (process.env.REACT_APP_MSW_MOCK === "mock") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.primary};
    color: ${colors.textColor};
    margin: 0;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  #root {
    display: block;
    height: 100%;
  }

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
