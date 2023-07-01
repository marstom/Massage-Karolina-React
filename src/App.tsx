import React from 'react';
import {Menu, Sekcja} from "ui/atoms/atomy";
import styled from 'styled-components'
import {AboutMePage} from "./ui/atoms/content";
import {Footer} from "./ui/molecules/footer";


const App = () => {
    return (
        <>
            <Menu/>
            <AboutMePage/>
            <h1>Nagłówek</h1>
            <Footer/>
        </>

    );
}

export default App;
