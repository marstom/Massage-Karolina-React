import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
  min-height: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #127ede;
`;
const Content = styled.div`
  flex: 1;
`;


export const ContactPage = () => {
  return (
    <>
      <Wrapper>
        <Content>
          KontaktPage
        </Content>
      </Wrapper>
    </>
  )
}
