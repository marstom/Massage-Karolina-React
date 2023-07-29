import React from "react";
import styled from "styled-components";
import { BlogMinifiedEntry } from "../atoms/blog_minified_entry";
import { Content } from "ui/atoms/Content";

type Props = {};

export const BlogMainPage = (props: Props) => {
  return (
    <Content>
      <BlogMinifiedEntry title={"Title"} content={"To jest opis"} />
      <BlogMinifiedEntry
        title={"Inny post"}
        content={"To jest opi asdf asdfseffaes eaf "}
      />
      <BlogMinifiedEntry
        title={"Inny post"}
        content={"To jest opi asdf asdfseffaes eaf "}
      />
    </Content>
  );
};
