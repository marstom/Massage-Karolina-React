import React from "react";
import { Footer } from "./ui/molecules/footer";
import { Route, Routes } from "react-router-dom";
import { AboutMePage } from "./ui/pages/AboutMePage";
import { Menu } from "./ui/molecules/menu";
import { BlogMainPage } from "./ui/pages/BlogMainPage";
import { Massage } from "./ui/pages/Massage";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path={"/"} element={<AboutMePage />} />
        <Route path={"/masaze"} element={<Massage />} />
        <Route path={"/blog"} element={<BlogMainPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
