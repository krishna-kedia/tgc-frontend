import styled from "styled-components";
import { Button, Container, Row } from "react-bootstrap";
import Logo from "./../../assets/Logo.png";
import Workshop from "./../../assets/header.png";

export const StyledJumbo = styled.div`
  background-image: url(${Workshop});
  background-size: cover;
  width: 100%;
`;

export const StyleHead = styled.div`
  font-weight: bold;
  font-size: 25px;
  background-color: transparent;
  color: white;
  text-align: center;
`;
export const StylePee = styled.div`
  font-weight: bold;
  font-size: 17px;
  background-color: transparent;
  color: white;
  text-align: center;
`;

export const StyledRow = styled(Row)`
  background-color: transparent;
`;
export const StyledContainer = styled(Container)`
  background-color: transparent;
`;
export const StyledButtonOne = styled(Button)`
  font-weight: bold;
  font-size: 13px;
  padding: 10px 60px 10px 60px;
  margin: 0px 25px 0px 0px;

  @media (max-width: 768px) {
    padding: 10px 20px 10px 20px;
    margin: 0px 10px 10px 0px;
  }
`;
export const StyledButtonTwo = styled(Button)`
  font-weight: bold;
  font-size: 13px;
  padding: 10px 50px 10px 50px;
  margin: 0px 0px 0px 25px;

  @media (max-width: 768px) {
    padding: 10px 10px 10px 10px;
    margin: 0px 0px 10px 10px;
  }
`;

export const PinkTextBoxDiv = styled.div`
  margin: 5rem 0;
`;

export const StatsDiv = styled.div`
  padding: 0;
  margin: 6vh 0 0 0;
`;

export const HeadingDiv = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

export const SuperheroDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 90vh;
  margin: 8rem;
`;

export const SuperHeroTextDiv = styled.div``;

export const SuperHeroImgDiv = styled.div`
  height: 100%;
  width: 40vw;
`;

export const SuperHeroImg = styled.img`
  height: 100%;
`;

export const SocialMediaSection = styled.div`
  text-align: center;
  margin: 6rem 0;
  background-color: #fbedf3;
  padding: 3rem 0;
`;

export const YouTubeSection = styled.div`
  text-align: center;
`;

export const StartAChapterDiv = styled.div`
  margin: 6rem 0;
  background-color: #fbedf3;
  padding: 3rem 0;
  text-align: center;
`;

export const Corousel = styled.div`
  margin: 6rem 0;
  background-color: #fbedf3;
  padding: 3rem 0;
`;
