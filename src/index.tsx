import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { colors } from "ui/palette";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AboutMePage } from "ui/pages/AboutMePage";
import { Massage } from "ui/pages/Massage";
import { BlogMainPage } from "ui/pages/BlogMainPage";
import { ContactPage } from "ui/pages/ContactPage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.primary};
    color: ${colors.textColor};
    
    
    /* min-height: 100vh; */
    margin: 0;
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
      <Route path="" element={<AboutMePage />} />
      <Route path="masaze" element={<Massage />} />
      <Route path="blog" element={<BlogMainPage />} />
      <Route path="kontakt" element={<ContactPage />} />
    </Route>
    </>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);



root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
