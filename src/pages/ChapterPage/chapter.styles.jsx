import styled from "styled-components";

export const HeaderBg=styled.div`
    display: flex;
    flex-wrap: wrap;
   // justify-content: space-around;
`;

export const HeaderImg = styled.img`
    padding-left: 5vw
    @media(max-width: 768px){
        height: 20vh;
    }

`;


export const HeaderInfo = styled.div`
padding-left: 25vw;
`;

export const ChapterHeading=styled.h1`
    color:#F05680;
    font-size:70px;
    font-weight:700;
    padding-top:5rem;
    padding-bottom:3rem;

`
export const ButtonBg=styled.div`
    margin-bottom:2rem;
`

export const HeadingStyle=styled.div`
text-align:center;
`
export const ImgCarouselStyle=styled.div`
    background-color:#FBEDF3;
    margin-top:80px;
    padding-top:4rem;
    padding-bottom:4rem
`
export const CardBg=styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-around;
 margin: 2vh 0 2vh 0;
`

export const DonateBg=styled.div`
text-align: center;
border-top: 3px pink solid;
padding: 3rem 0 0 0;
width: 80vw;
display: flex;
flex-direction: row;
justify-content: center;
margin: 5rem 0 0 10vw;
`

export const PinkDiv = styled.div`
    background-color: 
`