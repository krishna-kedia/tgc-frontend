import React from "react";
import { ButtonStyle } from "./button.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router";

export default function ShadowButton({ Text, onClick, width, link }) {
  return (
    <div onClick={onClick}>
      <Container style={{ margin: "0", padding: "0" }}>
        <ButtonStyle style={{ width: width }}>
          <a
            style={{ textDecoration: "none", color: "#f05680" }}
            target="_blank"
            href={link}
          >
            {Text}
          </a>
        </ButtonStyle>
      </Container>
    </div>
  );
}
