import styled from "styled-components";

export const BoxText = styled.p`
  color: #333;
  font-weight: 400;
  line-height: 165.24%;
  font-size: 1.5rem;
  text-align: left;
  width: 80%;
  @media screen and (min-width: 767px) {
    text-align: center;
    font-size: 1.25rem;
    padding: 0 2rem 2rem 2rem;
  }
`;

export const Input = styled.input`
  width: 60%;
  padding-left: 0.5rem;
  height: 3rem;
  font-weight: 500;
  color: #777;
  border-radius: 4px;
  border: 2px solid #ffcfe1;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 560px) {
    margin-bottom: 0.5rem;
    width: 90%;
  }
`;

export const Button = styled.button`
  background: white;
  color: #525151;
  width: 60%;
  height: 3rem;
  text-align: left;
  font-size: 0.95rem;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.21);
  border: transparent;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const BoxImage = styled.div`
  display: inline-block;
  width: 100%;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 1.7rem;
  margin: 0 0.8rem;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const SecondaryButton = styled.div`
  display: none;
  @media screen and (max-width: 560px) {
    height: 3.5rem;
    border-radius: 4px;
    border: transparent;
    display: inline-block;
    background: #d74b83;
    color: white;
    width: 65%;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 1.25px;
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const PinkButton = styled.div`
  height: 3.5rem;
  border-radius: 4px;
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d74b83;
  color: white;
  padding: 1em;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1.25px;
  font-size: 1.125rem;
  margin-bottom: 1em;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
