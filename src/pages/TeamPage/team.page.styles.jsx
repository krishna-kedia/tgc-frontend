import styled from "styled-components";
import { Button, Container, Row, Image} from 'react-bootstrap';
import Logo from "./../../assets/Logo.png";
import Workshop from "./../../assets/header.png";
import ShadowButton from "../../components/Button/button.component";

export const StyledJumbo = styled(Container)` 
    padding-top: 50px;
    padding-bottom: 100px;
`
export const Bord = styled(Row)` 
    margin: 2vh 0;
    @media(max-width: 768px){
        margin: 0;
    }   
`
    
export const StyleHead = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: #F05680;
    margin-left: 10px;
`
export const StylePee = styled.div`
    font-weight: bold;
    font-size: 20px;
    background-color: transparent;
    color: #F05680;
    margin-left:10px;
    margin-bottom:15px;

`
export const HeaderImage = styled(Image)` 
    padding-top: 250px;
    padding-bottom: 250px;
    height: 100vh;
`

export const ImgStyle=styled.div`
    padding-left:5rem;
    margin-left:10rem;
`
export const ChapterHeading=styled.h1`
    color:#F05680;
    font-size:70px;
    font-weight:700;
    padding-top:5rem;
    @media(max-width: 768px){
        padding-top: 0.5vh;
    }    
`
export const ButtonBg=styled.div`
    margin-right:20rem;
    margin-bottom:2rem;
`

export const PinkTextBoxDiv = styled.div`
    margin: 5rem 0;
    
`;

export const StatsDiv = styled.div`
    padding: 0;
`;

export const HeadingDiv = styled.div`
    margin-bottom: 3rem;
    text-align: center;
`

export const SuperheroDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 90vh;
    margin: 8rem 8rem;
`

export const TeamDiv = styled.div`
margin: 5vh 0;

`

export const HeaderBg=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`;

export const HeaderImg = styled.img`
  padding: 0 0 0 2vw;
  height: 90vh;
  @media(max-width: 768px){
      height: 60vh;
  }
`;


export const HeaderInfo = styled.div`
padding: 0 0 0 10vw;
@media(max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
 
}
`;

// export const ChapterHeading=styled.h1`
//     color:#F05680;
//     font-size:70px;
//     font-weight:700;
//     padding-top:5rem;
//     padding-bottom:3rem;

// `

export const SuperHeroImgDiv = styled.div`
height: 100%;
width: 40vw;
`

export const SuperHeroImg = styled.img`
    height: 100%;
`

export const SocialMediaSection = styled.div`
    text-align: center;
    margin: 6rem 0;
    background-color: #FBEDF3;
    padding: 3rem 0;
`

export const YouTubeSection = styled.div`
    text-align: center;
`;

export const StartAChapterDiv = styled.div`
margin: 6rem 0;
background-color: #FBEDF3;
padding: 3rem 0;
text-align: center;
`;

export const Corousel = styled.div`
margin: 6rem 0;
background-color: #FBEDF3;
padding: 3rem 0;
`;