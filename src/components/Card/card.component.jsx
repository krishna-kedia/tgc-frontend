import React from "react";
import {
  Title,
  Subtitle,
  IconText,
  IconImg,
  Description,
  Img,
  Button,
  CardHolder,
} from "./card.styles";

import { Card as CardComp } from "react-bootstrap";
const Card = ({
  icons,
  image,
  title,
  subtitle,
  description,
  isButton,
  onClick,
  id,
  height,
  iconText,
  icon,
}) => {
  // let icon = [],
  //   iconText;
  // if (icons) {
  //   icon = icons.split(" ");
  //   iconText = icon[icon.length - 1];
  //   icon.pop();
  //  
  // }
  //
  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }
  let text
if(description){
  text = truncate(description, 50);
}
  return (
    <CardHolder>
      <CardComp
        style={{
          borderRadius: "15px",
          paddingBottom: "4rem",
          margin: "0 auto",
          height: height,
        }}
      >
        <Img src={image} fluid />
        <CardComp.Body style={{ marginLeft: "1rem" }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <div style={{ margin: "1rem 0" }}>
            {icon ? (
              <>
                <IconImg src={icon} alt={"Workshop"} />
                <IconText>{iconText}</IconText>{" "}
              </>
            ) : (
              ""
            )}
          </div>
          {description ? <Description> {text}...</Description> : ""}
          {isButton ? (
            <Button className={id} onClick={onClick} data-id={id}>
              View More
            </Button>
          ) : (
            ""
          )}
        </CardComp.Body>
      </CardComp>
    </CardHolder>
  );
};

export default Card;
