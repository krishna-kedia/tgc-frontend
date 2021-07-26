import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  Background,
  Icons,
  TextAlign,
  PartnerStyle,
  FooterEnd,
} from "./footer.styles";

export default function Footer() {
  return (
    <Background>
      <Container fluid>
        <Row>
          <Col lg={5} md={6} sm={6} xs={12}>
            <TextAlign>
              GirlCode Humanitarian Foundation is a section-8 company registered
              under the Goverment of India on date 29th November 2017.
            </TextAlign>
            <TextAlign>Contact us at writetothegirlcode@gmail.com</TextAlign>
          </Col>

          <Col lg={4} md={3} sm={3} xs={6}>
            <Icons>
              <ul
                style={{
                  listStyleType: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://twitter.com/thegirlcode_co/"
                  >
                    <Image
                      src="https://imgur.com/n5KLiz1.jpg"
                      style={{ width: "30px" }}
                    />
                    @thegirlcode_co
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://www.instagram.com/thegirlcode_co/"
                  >
                    <Image
                      src="https://imgur.com/Etnm8Qc.jpg"
                      style={{ width: "30px" }}
                    />
                    @thegirlcode_co
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://www.instagram.com/thegirlcode_co/"
                  >
                    <Image
                      src="https://imgur.com/onm1gvD.jpg"
                      style={{ width: "30px" }}
                    />
                    @thegirlcode_co
                  </a>
                </li>
              </ul>
            </Icons>
          </Col>

          <Col lg={3} md={3} sm={3} xs={6}>
            <PartnerStyle>
              Partner
              <Image
                style={{ width: "100px" }}
                src="https://imgur.com/4jfqTl8.jpg"
              />
            </PartnerStyle>
          </Col>
        </Row>
      </Container>

      <FooterEnd>
        <Container>
          Copyright @ 2020, Made by Girlcode Humanitarian Foundation x Plutus
        </Container>
      </FooterEnd>
    </Background>
  );
}
