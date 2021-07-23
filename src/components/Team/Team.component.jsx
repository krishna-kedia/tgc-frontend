import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import { Section } from './Team.styles'
import Heading from "../../components/Heading/heading.component";
import LeadCard from "../../components/LeadCard/LeadCard.component";
import MemberCard from "../../components/MemberCard/MemberCard.component";

const Team = ({backgroundColour, heading, leads, mems}) => {

    const leaders = leads.map((item) => (
        <LeadCard
            imgUrl={item[0]}
            name={item[1]}
            designation={item[2]}
        />
    ));

    const members = mems.map((item) => (
        <MemberCard
            imgUrl={item[0]}
            name={item[1]}
        />
    ));

    return (
        <Section bgColour={backgroundColour}>
         <Heading heading={heading} />
         <Container class="d-flex">
         <Row className="justify-content-center">
         {leaders}
         </Row >
         </Container>
         <Container>
         <Row className="justify-content-center">
         {members}
         </Row>
         </Container>
        </Section>
    )
}

export default Team;

