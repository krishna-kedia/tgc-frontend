import React from "react";
import { Text, Title } from "./internships.style";
import { Card } from "react-bootstrap";

const InternshipCard = ({ item }) => {
  return (
    <Card className="my-3 p-3 border-0">
      <Card.Img
        src={item[2]}
        variant="top"
        style={{ width: "7rem", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title as="div">
          <Title>{item[0]}</Title>
        </Card.Title>
        <Card.Text as="div">
          <Text>{item[1]}</Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InternshipCard;
