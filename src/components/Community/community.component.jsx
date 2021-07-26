import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import superhero from "../../assets/homepage/superhero.png";
import { HeadingStyle, DescriptionStyle, Align } from "./community.styles";

export default function CommunitySection({ content }) {
  const listItems = content.map((c) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "0.5em",
      }}
    >
      <div
        style={{
          fontSize: "2em",
          color: "#D74B83",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {c[0]}
      </div>
      <div
        style={{
          color: "#666666",
          fontSize: "1em",
          textAlign: "center",
          width: "80%",
        }}
      >
        {c[1]}
      </div>
    </div>
  ));

  return (
    <Container>
      <Row style={{ height: "100%" }}>
        <Col lg={6} md={5} sm={12} xs={12}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {listItems}
          </div>
        </Col>
        <Col
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image src={superhero} style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}
