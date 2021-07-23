import styled from "styled-components"
import { Container, Row, Col, Image } from 'react-bootstrap';


export const Section = styled.div`
    text-align: center;
    background-color: ${({bgColour}) => bgColour};
    padding: 5vh 0;
`