import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";

import CSS from "csstype";
import Spinner from "../../atoms/spinner/Spinner";

const a: CSS.Properties = {
  backgroundColor: "azure",
};

const SpecialButton = styled.button<{
  $primary?: boolean;
  $textColor?: string;
}>`
  background: ${(props) => (props.$primary ? "azure" : "red")};
  font-size: 2em;
  color: ${(props) => props.$textColor || "blue"};
`;

type FlexProps = {
  direction?: "row" | "column";
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap-reverse;
`;

type Grow = {
  grow: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};
const Item = styled.div<Grow>`
  flex-grow: ${(props) => props.grow};
`;

type InPr = {
  $small: boolean;
  grow: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  $padding: string;
};

const Input = styled.input.attrs<InPr>((props) => ({
  type: "text",
  size: props.$small ? 5 : undefined,
}))<{ $padding?: string; $small?: boolean }>`
  border-radius: 3px;
  border: 1px solid #bf4f74;
  display: block;
  margin: 0 0 1em;
  padding: ${(props) => props.$padding};
  flex-grow: ${(props) => props.grow};

  ::placeholder {
    color: #bf4f74;
  }
`;

export const TestPageStyled = () => {
  return (
    <Content>
      <SpecialButton $textColor={"#020202"}>asf</SpecialButton>
      <Flex direction={"row"}>
        <Item grow={5}>to</Item>
        <Item grow={8}>to</Item>
        <Item grow={3}>to</Item>
        <Item grow={3}>to</Item>
        <Item grow={3}>to</Item>
        <Item grow={3}>to</Item>
        <Item grow={3}>to</Item>
      </Flex>
      <Flex direction={"row"}></Flex>
      <Input grow={8}></Input>
      <Input $padding={"2em"} grow={8}></Input>
      <Input $padding={"3em"} placeholder={"Padded"} grow={8}></Input>

      <hr />
      <Spinner />
    </Content>
  );
};
