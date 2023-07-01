import styled from "styled-components";
import leavesImg from "assets/leaves-small.jpg"

const AboutMeContent = styled.div`
  background-image: url(${leavesImg});
  background-size: cover;
  height: 100vh;
`


type Props = {
    children?: React.ReactNode
};
export const AboutMePage: React.FC<Props> = (props) => {
    return (<AboutMeContent>
        {props.children}

        <div>Ifniajfefiojofj faosi</div>
    </AboutMeContent>)
}