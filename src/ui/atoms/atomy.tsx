import React from 'react'
import styled from 'styled-components'
import {colors, otherColors} from 'ui/palette'

export const Sekcja = styled.div`
  background: antiquewhite;
`

const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  background: ${otherColors.secondaryOpaque};
  color: ${colors.textColor};
  padding-top:50px;
  position: fixed;
  width: 100%;
  z-index: 100;

`

const Item = styled.div`
  font-size: 150%;
  //background: #15342b;
  margin: 10px;
  padding-block: 15px;
  padding: 0px 30px 0px 30px;
  &:hover {
    color: ${colors.lightBlue}
  }
`


export const Menu = () => {
    return (<MenuBar>
        <Item>O mnie</Item>
        <Item>Masaże</Item>
        <Item>Blog</Item>
        <Item>Kontakt</Item>
    </MenuBar>)
}