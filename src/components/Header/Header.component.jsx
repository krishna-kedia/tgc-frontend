
import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { StyledJumbo, StyleHead, StyledButton, StyledRow, StyledContainer } from "./Header.styles";
const Header = () => {
        return (
            <StyledJumbo>
            <StyledContainer>
            <StyledRow className="justify-content-center">
                <StyleHead>Welcome To The Girl Code</StyleHead>
            </StyledRow>
            <StyledRow className="justify-content-center">
                  <StyledButton variant="outline-dark" className="rounded-0 mr-3">Party</StyledButton>{' '}
                 
                 <StyledButton variant="outline-dark" className="rounded-0 ml-3">Tym</StyledButton>{' '}
            </StyledRow>
            </StyledContainer>
            </StyledJumbo>
        
        )
    
}

export default Header;



