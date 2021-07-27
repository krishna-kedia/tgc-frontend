import styled from "styled-components";
import { Button, Container, Row } from "react-bootstrap";
import Logo from "./../../assets/Logo.png";
import Workshop from "./../../assets/header.png";

export const HeaderDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://i.imgur.com/2w0bA3I.jpg);
  background-size: cover;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.7;
  width: 80%;
  @media screen and (max-width: 720px) {
  }
`;

export const Heading = styled.p`
  font-size: 2.8em;
  font-weight: bold;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 720px) {
    font-size: 2em;

  }
`;

export const SubHeading = styled.p`
  font-size: 1.5em;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    font-size: 1.3em;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const OutlineButton = styled.div`
  color: white;
  border: 2px white solid;
  border-radius: 5px;
  width: 10em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    width: 10em;
    margin: 0.8em 0;

  }
`;

export const PinkTextBoxDiv = styled.div`
  margin: 3em 3em;
  @media screen and (max-width: 768px) {
    margin: 5em 0;
  }
`;

export const StatsDiv = styled.div`
  padding: 0;
  margin: 2em 0 0 0;
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
  padding: 3rem 0 0 0;
  text-align: center;
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Corousel = styled.div`
  margin: 2rem 0 6rem 0;
  background-color: #fbedf3;
  padding: 3rem 0;
  text-align: center;
`;
