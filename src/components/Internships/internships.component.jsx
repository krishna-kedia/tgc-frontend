import React from "react";
import { Col, Row } from "react-bootstrap";
import InternshipCard from "./internshipcard.component";
const Internships = ({ content }) => {
  const internships = content.map((item) => (
    <Col sm={12} md={6} lg={4} xl={4}>
      <InternshipCard item={item} />
    </Col>
  ));

  return <Row className="justify-content-md-around">{internships}</Row>;
};

export default Internships;
