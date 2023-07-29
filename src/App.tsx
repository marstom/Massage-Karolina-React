import React from "react";
import { Footer } from "./ui/molecules/footer";
import { Outlet } from "react-router-dom";
import { Menu } from "./ui/molecules/menu";

const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
