import styled from "styled-components";

export const HeaderBg = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  // justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderImg = styled.img`
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const HeaderInfo = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChapterHeading = styled.h1`
  color: #f05680;
  font-size: 70px;
  font-weight: 700;
  text-align: center;
`;
export const ButtonBg = styled.div`
  margin-bottom: 2rem;
`;

export const HeadingStyle = styled.div`
  text-align: center;
`;
export const ImgCarouselStyle = styled.div`
  background-color: #fbedf3;
  margin-top: 80px;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
export const CardBg = styled.div`
  background-color: white;
  text-align: center;
  padding-top: 4rem;
  text-align: center;
  @media screen and (max-width: 500px) {
    padding: 1em;
  }
  @media screen and (min-width: 1200px) {
    padding: 4rem 4rem;
  }
  @media screen and (min-width: 1500px) {
    padding: 4rem 15rem;
  }
`;

export const DonateBg = styled.div`
  text-align: center;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem 0 0 10vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PinkDiv = styled.div``;
