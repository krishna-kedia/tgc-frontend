import styled from "styled-components";

export const HeaderImg = styled.img`
  max-width: ${(props) => props.imgWidth};
  height: auto;
  @media (max-width: 768px) {
  }
`;

export const HeaderInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #f05680;
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.25em;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const SubTitle = styled.h1`
  color: #f05680;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
