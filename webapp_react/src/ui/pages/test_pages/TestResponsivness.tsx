// rsc
import React from 'react';
import styled from "styled-components";
import {Content} from "../../atoms/Content";


const Small = styled.div`
    color: yellow;
    background: blue;

  @media only screen and (max-width: 768px){
    color: yellowgreen;
    background: #1ea7fd;
  }
`


const TestResponsivness = () => {
    return (
        <Content>
            <Small>Napis</Small>
        </Content>
    );
};

export default TestResponsivness;
