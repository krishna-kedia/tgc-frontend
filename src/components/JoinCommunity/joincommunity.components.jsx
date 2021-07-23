import React from "react";
// import {  } from "../startchapter/startchapter.styles";
import { TextBox, ImageBox, FormBox, Background } from "./joincommunity.styles";
import Form from "./form";
import Heading from "../Heading/heading.component";
import "./joincommunity.styles";
import { Col, Row, Image } from "react-bootstrap";
import tgc from '../../assets/TGC.png'
import ShadowButton from "../Button/button.component";
import { Button } from "bootstrap";

export default function JoinCommunity() {
  return (
    <Background>
      <Heading heading="JOIN OUR COMMUNITY" />
      {/* <Row>
        
          
        
        <Col xs={12} md={6}>
          <FormBox>
            <ImageBox>
              <Image src="https://i.imgur.com/KfG7TWC.png" fluid />
            </ImageBox>
             <Form />
          </FormBox>
        </Col>
      </Row> */}
      <img src={tgc} style={{height: '60vh', alignSelf: 'center'}}/>
      <TextBox>
            At The Girl Code, we aim to bridge the gender gap in the tech
            community by inspiring young girls to learn programming by hosting
            workshops at schools and universities local to them. Through our
            platform and intuitive curriculum, we plan to give rise to a new
            generation of female programmers set to take the world by storm.
          </TextBox>
      <div style={{alignSelf: "center", padding: "1em 0"}}>
      <ShadowButton Text={"Apply Now"} width = '20vw' link='https://docs.google.com/forms/u/3/d/e/1FAIpQLSeqIjXp77VuEHqxevq3hdw_myuCVzYGJsKzFNpdWYwHKbNI-Q/viewform'/>
      </div>
    </Background>
  );
}
