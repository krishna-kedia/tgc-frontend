import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Image} from "react-bootstrap";
import {  NameStyles, QuoteStyles,TestimonialBackground,ImgBg} from "./testimonial.styles";
import Heading from  '../Heading/heading.component';
export default function Testimonial({text,name}){
    return(
        <Container >
            <TestimonialBackground style={{left:"auto",right:"auto"}}>
            <Heading heading={"TESTIMONIALS"}/>
                <Row>
                    <ImgBg>
            <Image src="https://imgur.com/bAK85e2.jpg" style={{position:"absolute",zIndex:"-1"}} fluid/>
            </ImgBg>
            <QuoteStyles>
                <Row>
            {text}
            </Row>
            <NameStyles>
                <Row>
            {name}
            </Row>
            </NameStyles>
            </QuoteStyles>
            </Row>
            </TestimonialBackground>
        </Container>
    );
}