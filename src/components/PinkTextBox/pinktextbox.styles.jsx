import styled from "styled-components";

export const BoxBackground = styled.div`
  background-color: #fbebf1;
  padding: 3rem 4rem 3rem 4rem;
  border-radius: 25px;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    border-radius: 0px;
  }
`;
export const BoxHeading = styled.h2`
  color: #d74b8d;
  font-weight: 800;
  letter-spacing: 0.145rem;
  font-size: 1.225rem;
  text-align: center;
  margin: auto;
  padding-bottom: 1rem;
  @media screen and (max-width: 481px) {
    font-size: 1.125rem;
  }
`;
export const BoxText = styled.p`
  font-weight: 400;
  line-height: 165.24%;
  @media screen and (min-width: 481px) {
    font-size: 1.25rem;
  }
`;
