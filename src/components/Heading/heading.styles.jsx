import styled from "styled-components";

export const Title = styled.div`
  display: inline-block;
  width: auto;
  color: #d74b8d;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 2.5rem;
  border-bottom: 5px dashed #785189;
  text-decoration: none;
  @media screen and (max-width: 992px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 515px) {
    padding-bottom: 0.5 em;
  }
`;
