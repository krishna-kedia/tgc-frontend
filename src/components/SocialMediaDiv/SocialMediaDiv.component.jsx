import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { Container } from "reactstrap";

const SocialMediaDiv = () => {
  return (
    <Container>
      <a target="_blank" href="https://www.instagram.com/thegirlcode_co/">
        <Gallery photos={photos} />
      </a>
    </Container>
  );
};

export default SocialMediaDiv;
