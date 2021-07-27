import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { HeaderImg, HeaderInfo, Title, SubTitle } from "./Header.styles";
import ShadowButton from "../Button/button.component";

const PageHeader = ({ img, title, subtitle, buttons, imgWidth, imgHeight }) => {
  return (
    <Container fluid style={{ margin: "2em 0em", padding: "0" }}>
      <Row
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        <Col lg={6} md={12} style={{ margin: "0", padding: "0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "90%",
              width: "100%",
            }}
          >
            <HeaderImg imgWidth={imgWidth} src={img} />
          </div>
        </Col>

        <Col lg={6} md={12} style={{ margin: "0", padding: "0" }}>
          <HeaderInfo>
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title>{title}</Title>
              {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
            </div>

            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
              }}
            >
              {buttons
                ? buttons.map(({ text, link }) => {
                    return <ShadowButton Text={text} link={link} />;
                  })
                : null}
            </div>
          </HeaderInfo>
        </Col>
      </Row>
    </Container>
  );
};

export default PageHeader;
