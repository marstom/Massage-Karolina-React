import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { AboutMePage } from "./ui/pages/AboutMePage";
import { Massage } from "./ui/pages/Massage";
import { BlogMainPage } from "./ui/pages/BlogMainPage";
import { FullPostPage } from "./ui/pages/FullPostPage";
import { ContactPage } from "./ui/pages/ContactPage";
import { TestPageWithFunnyCats } from "./ui/pages/test_pages/TestPageWithFunnyCats";
import { TestPageStyled } from "./ui/pages/test_pages/TestPageStyled";
import TestResponsivness from "./ui/pages/test_pages/TestResponsivness";
import { Tantra } from "./ui/pages/sessions/touch/Tantra";
import { LomiLomi } from "./ui/pages/sessions/touch/LomiLomi";
import { Ustawienia } from "./ui/pages/sessions/release/Ustawienia";
import { AccessBars } from "./ui/pages/sessions/release/AccessBars";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<AboutMePage />} />
        <Route path="masaze" element={<Massage />} />
        <Route path="sesje/masaze/tantra" element={<Tantra />} />
        <Route path="sesje/masaze/lomi-lomi" element={<LomiLomi />} />
        <Route path="sesje/uwalnianie/ustawienia" element={<Ustawienia />} />
        <Route path="sesje/uwalnianie/access-bars" element={<AccessBars />} />
        <Route path="blog" element={<BlogMainPage />} />
        <Route path="blog/:id" element={<FullPostPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route
          path="test-page-with-funny-cats/:id"
          element={<TestPageWithFunnyCats />}
        />
        <Route path="test-page-styled" element={<TestPageStyled />} />
        <Route path="test-responsivness" element={<TestResponsivness />} />
      </Route>
    </>
  )
);
