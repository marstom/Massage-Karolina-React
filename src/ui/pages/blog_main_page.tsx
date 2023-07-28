import React from 'react'
import styled from "styled-components";
import {BlogMinifiedEntry} from "../atoms/blog_minified_entry";


const Content = styled.div`
  padding-top: 120px;
`


type Props = {}

export const BlogMainPage = (props: Props) => {

    return (
        <Content>
            <h1>Blog</h1>
            <h2>Wpisy</h2>
            <BlogMinifiedEntry title={"Title"} content={"To jest opis"}/>
            <BlogMinifiedEntry title={"Inny post"} content={"To jest opi asdf asdfseffaes eaf "}/>
        </Content>)
}