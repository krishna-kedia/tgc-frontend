import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { Container } from 'reactstrap';

const SocialMediaDiv = () => {
  return (
    <Container className='mb-5 mt-5'>
      <Gallery photos={photos}  />
    </Container>
  );
}

export default SocialMediaDiv;