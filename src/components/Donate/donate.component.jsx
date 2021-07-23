import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShadowButton from "../Button/button.component";
import { Background, Alignment, Title, Content } from "./donate.styles";

export default function Donate() {
  return (
    <Container style={{paddingBottom:"4em"}}>
      <Background>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <Alignment>
              <Image src="https://imgur.com/9UFLhE6.jpg" fluid />
            </Alignment>
          </Col>

          <Col lg={9} md={9} sm={12}>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Title>HELP SUPPORT THE GIRL CODE</Title>
                  </Row>
                  <Row>
                    <Content>
                      The Girl Code is a non-profit organization and we do not
                      take any fee for our workshops. Please consider donating
                      to the organization and supporting our cause!
                    </Content>
                  </Row>
                </Container>
                <Row>
                  <Alignment>
                    <ShadowButton Text={"Donate"} width='20vw' />
                  </Alignment>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Background>
    </Container>
  );
}
