import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { BoxBackground, BoxHeading, BoxText } from "./pinktextbox.styles";

export default function PinkTextBox({ heading, text }) {
  return (
      <BoxBackground>
        <Row>
          <BoxHeading>{heading}</BoxHeading>
          <BoxText>{text}</BoxText>
        </Row>
      </BoxBackground>
  );
}
