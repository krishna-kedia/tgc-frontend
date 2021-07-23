import styled from "styled-components";
import { Button, Container, Row } from 'react-bootstrap';
import Logo from "./../../assets/Logo.png";

export const StyledJumbo = styled.div` 
    padding-top: 250px;
    padding-bottom: 250px;
    background-color: rgba(255,182,193, 0.7);
    width: 100%;
`
export const StyleHead = styled.h2`
    font-weight: bold;
    background-color: transparent;
`
export const StyledRow = styled(Row)`
    background-color: transparent;
`
export const StyledContainer = styled(Container)`
    background-color: transparent;
`
export const StyledButton = styled(Button)`
    width: 200px
`