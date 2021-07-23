import styled from "styled-components";

export const StatDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  flex:0.33333;
  @media screen and (max-width:576px) {
        margin-top:1em;
  }
`;

export const FlagNum = styled.div`
  font-size:4em;
  color: #ee1e6d;
  font-weight: 700;
  letter-spacing: 2px;
  text-align:center;
  @media screen and (max-width:720px) {
       
  }
`;
export const FlagStat = styled.div`
  font-weight: 750;
  font-size:1em;
  color: #666666;
  letter-spacing: 2px;
  text-align:center;
  @media screen and (max-width:576px) {
    margin-top:0.5em;
  }
`;

export const RowDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  @media screen and (max-width:576px) {
        flex-direction: column;
  }
`