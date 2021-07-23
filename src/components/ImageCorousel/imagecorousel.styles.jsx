import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const BoxImage = styled.div`
  display: inline-block;
  width: 60%;
  height:25em;
  background-position: center; 
  background-size: cover;
  display:flex;
  flex-direction:column-reverse;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const FooterImages = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  overflow:hidden;
  margin-top:20px;
  @media screen and (max-width: 560px){
    display:none;
  }
`;

export const FooterImage = styled.img`
  width:150px;
  height:90px;
  margin: 0px 20px;
`;

export const PinkDiv = styled.div`
  background-color:rgba(238, 30, 109, 0.55);
  width:70%;
  height:25%;
  color: white;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
  @media screen and (max-width: 560px){
    font-size:10px;
    width: 100%;
  }

`;





