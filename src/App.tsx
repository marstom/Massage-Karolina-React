import React from 'react';
import {Menu, Sekcja} from "ui/atoms/atomy";

import styled from 'styled-components'
import {AboutMePage} from "./ui/atoms/content";

// const MainContainer = styled.div`
//   margin: 0;
//   background: #1ea7fd;
// `

const App = () => {
    return (
        <>
            <Menu/>
            <AboutMePage>
            </AboutMePage>
        </>

    );
}

export default App;
