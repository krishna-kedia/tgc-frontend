import styled from "styled-components";

export const StartChapterSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;
export const DonateSection = styled.div`
  margin-top: 5rem;
  text-align: center;
`;
export const InternshipsSection = styled.div`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PinkDiv = styled.div`
  margin: 0 6vw;
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeading = styled.p`
  font-weight: 900;
  font-size: 60px;
  line-height: 73px;
  margin-bottom: 3vh;
  color: #f05680;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const HeaderText = styled.p`
  font-weight: bold;
  font-size: 27px;
  line-height: 33px;
  color: #f05680;
  padding: 1vh 0;
`;

export const ButtonDiv = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
