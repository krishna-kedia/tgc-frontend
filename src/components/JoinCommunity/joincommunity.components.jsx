import React from "react";
// import {  } from "../startchapter/startchapter.styles";
import {
  TextBox,
  ImageBox,
  FormBox,
  ButtonDiv,
  Background,
} from "./joincommunity.styles";
import Form from "./form";
import Heading from "../Heading/heading.component";
import "./joincommunity.styles";
import { Col, Row, Image } from "react-bootstrap";
import tgc from "../../assets/TGCcommunity.png";
import ShadowButton from "../Button/button.component";

export default function JoinCommunity() {
  return (
    <Background>
      <Heading heading="JOIN OUR COMMUNITY" />

      <TextBox>
        At The Girl Code, we aim to bridge the gender gap in the tech community
        by inspiring young girls to learn programming by hosting workshops at
        schools and universities local to them. Through our platform and
        intuitive curriculum, we plan to give rise to a new generation of female
        programmers set to take the world by storm.
      </TextBox>
      <ButtonDiv>
        <ShadowButton
          Text={"Apply Now"}
          width="100%"
          link="https://docs.google.com/forms/u/3/d/e/1FAIpQLSeqIjXp77VuEHqxevq3hdw_myuCVzYGJsKzFNpdWYwHKbNI-Q/viewform"
        />
      </ButtonDiv>
      <ImageBox>
        <img src={tgc} style={{ width: "70%", alignSelf: "center" }} />
      </ImageBox>
    </Background>
  );
}
