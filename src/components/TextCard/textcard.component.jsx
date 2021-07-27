import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Content, Title, Alignment } from "./textcard.styles";
import Heading from "../Heading/heading.component";

export default function TextCard({ heading, content }) {
  const listItems = content.map((item) => (
    <Col lg={3} md={6} sm={12} xs={12} style={{ marginBottom: "1em" }}>
      <Container>
        <Image
          src={item[2]}
          style={{ justifyContent: "center", width: "100px", height: "80px" }}
          fluid
        />

        <Title>{item[0]}</Title>
        <Content>{item[1]}</Content>
      </Container>
    </Col>
  ));

  return (
    <Alignment>
      <Container>
        <Heading heading={heading} />
        <Row style={{ marginTop: "3em" }}>{listItems}</Row>
      </Container>
    </Alignment>
  );
}
