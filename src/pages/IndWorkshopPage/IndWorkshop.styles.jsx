import styled from "styled-components";

export const VerticalMargin = styled.div`
  margin: 3em 0em;

  @media screen and (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

export const HorizontalMargin = styled.div`
  margin: 0em 3em;

  @media screen and (max-width: 768px) {
    margin-right: ${(props) => props.mobileMargin};
    margin-left: ${(props) => props.mobileMargin};
  }
`;

export const ChapterHeading = styled.h1`
  color: #f05680;
  font-size: 70px;
  font-weight: 700;
  text-align: center;
`;

export const WorkHeading = styled.h1`
  color: #f05680;
  font-size: 60px;
  font-weight: 700;
  padding-top: 7rem;
  text-align: center;
`;
export const SubHeading = styled.h1`
  color: #f05680;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

export const Corousel = styled.div`
  margin: 3rem 0 3rem 0;
  padding: 3rem 0;
  text-align: center;
`;

export const CardHeading = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;
export const ProjectShowcaseDiv = styled.div`
  background-color: #fbedf3;
  margin: 6rem 0rem 4rem 0rem;
  padding: 2rem 0;
`;

export const AcknowledgementBg = styled.div`
  background-color: #fbedf3;
  padding-top: 0.1rem;
  margin-top: 2vh;
`;

export const CardBg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2vh 0 0 2vh;
`;

export const HeaderIconImage = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
