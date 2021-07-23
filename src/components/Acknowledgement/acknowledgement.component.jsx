import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Image} from "react-bootstrap";
import { BoxBackground } from "../Acknowledgement/acknowledgement.styles";
import Heading from "../Heading/heading.component";

export default function Acknowledgement({ heading, image }) {
  return (<BoxBackground>
      <Container fluid>
          <Heading heading={heading}/>
          <Image src={image} style={{marginBottom:"4rem", height: '90vh'}} fluid/>
    </Container>
    </BoxBackground>
  );
}