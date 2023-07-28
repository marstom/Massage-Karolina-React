import React from 'react';
import {Footer} from "./ui/molecules/footer";
import {Route, Routes} from 'react-router-dom'
import {AboutMePage} from "./ui/pages/about_me_page";
import {Menu} from "./ui/molecules/menu";
import {BlogMainPage} from "./ui/pages/blog_main_page";

const App = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path={"/"} element={<AboutMePage/>}/>
                <Route path={"/masaze"} element={<div>masaże....</div>}/>
                <Route path={"/blog"} element={<BlogMainPage/>}/>
            </Routes>
            <Footer/>
        </>

    );
}

export default App;
