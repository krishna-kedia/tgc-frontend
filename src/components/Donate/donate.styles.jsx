import styled from "styled-components";

export const Background = styled.div`
 
  
`;
export const Alignment = styled.div`
  display: flex;
  align-self: center;
  @media(max-width: 786px) {
   display:flex;
   flex-direction:row;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-bottom: 1em;
  }
`;
export const Title = styled.h2`
  color: #f05680;
  font-weight: 800;
  font-size: 2em;

  @media screen and (max-width: 786px) {
   text-align:center;
   font-size: 1.5em;
  }
`;
export const Content = styled.p`
  text-align: left;
  font-size: 1.25em;

  @media screen and (max-width: 992px) {
   
  }
  @media screen and (max-width: 786px) {
    text-align: center;
    font-size: 0.9em;
  }
`;
