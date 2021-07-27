import styled from "styled-components";
import { Button, Container, Row, Image} from 'react-bootstrap';

export const StyledJumbo = styled(Container)` 

`
export const Bord = styled(Row)` 
    margin: 10vh 0;
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  margin: 5vh;
  justify-content: space-around; 
`

    
export const StyleHead = styled.div`
    font-weight: bold;
    font-size: 55px;
    color: #F05680;
    margin-left: 10px;
    margin-bottom: 15px;
    @media screen and (max-width: 768px) {
      padding: 0.1em;
      font-size: 40px;
      text-align: center;
    }
`

export const PinkTextBoxDiv = styled.div`
    margin: 5rem 0;
    
`;

export const StatsDiv = styled.div`
    padding: 0;
`;

export const Corousel = styled.div`
margin: 6rem 0 0 0;
padding: 3rem 0;
background: #FBEDF3;
`;

export const OtherChapters = styled.div`
    text-align: center;
    margin: 5vh 0 8vh 0;
    
    padding: 3rem 0;
`;

export const TeamDiv = styled.div`
    text-align: center;
    background-color: #FBEDF3;
`;

export const PastWorkshopsDiv = styled.div`
  background-color: white;
  text-align: center;
  padding-top: 4rem;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 4rem 4rem;
  }
  @media screen and (min-width: 1500px) {
    padding: 4rem 15rem;
  }
`;