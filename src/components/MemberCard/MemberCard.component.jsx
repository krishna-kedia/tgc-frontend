import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import { NameStyle } from "./MemberCard.styles";

const MemberCard = ({imgUrl, name, designation}) => {
    return (
            <Col xs={{ span: 5 }} md={{span: 4}} lg={{span: 2}} className="mx-4 my-3">
            <Image src={imgUrl} roundedCircle fluid/>
            <NameStyle className="text-center mt-3 text-uppercase">{name}</NameStyle>
            </Col>
    )
}

export default MemberCard;