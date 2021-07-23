import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import superhero from '../../assets/homepage/superhero.png';
import { HeadingStyle,DescriptionStyle,Align } from "./community.styles";


export default function CommunitySection({content }) {
  const listItems = content.map(c => (
    <Row>
       <div
        style={{
          fontSize: "35px",
          color: "#D74B83",
          fontWeight: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <HeadingStyle>{c[0]}</HeadingStyle>
         
      </div>
      <div
        style={{
          color: "#666666",
          fontSize: "1em",
          textAlign: "center",
          marginBottom:"2em",
          
        }}
      >
       <DescriptionStyle> {c[1]}</DescriptionStyle>
       </div>
    </Row>
  ));
  return (
    <Container>
      <Row>
        <Col lg={6} md={5} sm={12} xs={12}>
          <Align>
          {listItems}
          </Align>
        </Col>
        <Col  lg={6} md={7} sm={12} xs={12} style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <Image src={superhero} style={{width:"100%"}} />
        </Col>
      </Row>
    </Container>
  );
}
  