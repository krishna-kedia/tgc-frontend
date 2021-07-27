import styled from "styled-components";

export const Background = styled.div`
  margin-top: 3rem;
  padding-top: 2em;
  background-color: rgba(215, 75, 131, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.2em;
  margin-top: 1em;
  padding: 0em 3em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
    padding: 0 2em;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 3.25rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  background: #fff;
  border: 2px solid #ffcfe1;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
export const ImageBox = styled.div`
  width: 100%;
  padding-top: 3rem;
  //margin-left: 0.5rem;
`;
export const FormBox = styled.div`
  text-align: center;
  //margin-left: 10rem;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const FormLabel = styled.p`
  color: #555;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  padding-left: 0.2rem;
  text-transform: uppercase;
`;

export const ButtonDiv = styled.div`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
