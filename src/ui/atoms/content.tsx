import styled from "styled-components";
import leavesImg from "assets/leaves-small.jpg"

export const AboutMeContent = styled.div`
  padding-top: 120px;
  // background-image: linear-gradient(to bottom,
  // rgba(68, 65, 65, 0.3),
    // rgba(61, 60, 60, 0.3)), url(${leavesImg});
  //background-size: cover;
  //height: 100vh;
  //z-index: 2;
  //position: center;
  //margin: 0px;
`

export const LeavesImage = styled.div`
  padding-top: 120px;
  background-image: linear-gradient(to bottom,
  rgba(68, 65, 65, 0.3),
  rgba(61, 60, 60, 0.3)), url(${leavesImg});
  height: 100vh;
  background-size: cover;
  position: relative;
  margin-top: -120px;
  width: 100%;
  top: 0px;
  bottom: 0px;
  z-index: -1;
  //margin: 0px;
  //padding: 0px;
`


