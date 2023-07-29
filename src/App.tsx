import React from "react";
import { Footer } from "./ui/molecules/Footer";
import { Outlet } from "react-router-dom";
import { Menu } from "./ui/molecules/Menu";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh; // 100% of view height
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Menu />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default App;
