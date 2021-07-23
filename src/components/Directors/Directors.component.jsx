import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import { NameStyle, DesigStyle } from "./Directors.styles";

const Directors = ({imgUrlOne, nameOne, imgUrlTwo, nameTwo}) => {
    return (
        <Container class="my-4">
        <Row>
            <Col xs={{span: 7}} md={{span: 3}} lg={{span: 3}} className="mx-auto mb-3">
            <Image src={imgUrlOne} roundedCircle fluid/>
            <NameStyle className="text-center mt-3">{nameOne}</NameStyle>
            </Col>
            <Col xs={{span: 7}} md={{span: 3}} lg={{span: 3}} className="mx-auto mb-3">
            <Image src={imgUrlTwo} roundedCircle fluid/>
            <NameStyle className="text-center mt-3">{nameTwo}</NameStyle>
            </Col>
        </Row>
        </Container>
    )
}

export default Directors;
