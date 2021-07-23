import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import WebDevImg from "../../assets/homepage/Workshops PNG.png";
import SocialMediaImg from "../../assets/socialmedia.png";
import OutreachImg from "../../assets/outreach.png";
import ContentImg from "../../assets/content.png";
import DesignImg from "../../assets/design.png";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import {
  MainHeading,
  HeaderText,
  StartChapterSection,
  InternshipsSection,
  PinkDiv,
  HeaderButtons,
} from "./joinus.page.style";
import Heading from "../../components/Heading/heading.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Button from "../../components/Button/button.component";
import JoinCommunity from "../../components/JoinCommunity/joincommunity.components";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Internships from "../../components/Internships/internships.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ShadowButton from "../../components/Button/button.component";
import { DonateBg } from "../ChapterPage/chapter.styles";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="#F05680"
      />
      <Container style={{ paddingTop: "2rem" }}>
        <Row>
          <Col md={6}>
            <Image src={JoinImg} alt="Join Us" fluid />
          </Col>
          <Col xs={0} md={1} />
          <Col md={5} className="text-center" style={{padding: '2vh 0 0 0'}}>
            <MainHeading>Join Us </MainHeading>
            <HeaderText>Together everyone achieves more!</HeaderText>
            <HeaderButtons>
            <ShadowButton Text={"INTERN WITH US"} width='90%' link='https://docs.google.com/forms/d/e/1FAIpQLSdNnrbYFbdkTMnlod-Pp74KRPLipqN2RHmT1gwDoudFcxbG9Q/viewform'/>
            <ShadowButton Text="START A CHAPTER" width='90%' link='https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform'/>
            <ShadowButton Text={"JOIN THE COMMUNITY"} link='https://docs.google.com/forms/u/3/d/e/1FAIpQLSeqIjXp77VuEHqxevq3hdw_myuCVzYGJsKzFNpdWYwHKbNI-Q/viewform' width='90%'/>
            </HeaderButtons>
          </Col>
        </Row>
      </Container>
      <PinkDiv>
      <PinkTextBox
        heading={"WHY WORK WITH US"}
        text={
          "Have you always wanted to do something to make a positive impact in the world? If yes, then we’re the place for you! Use your technical/non-technical skills to effect tangible, positive change. Look into which of our internship programs suits you, and apply today! You’ll get to work with a team of over 70 compassionate, talented, and driven people who want to make a difference and learn amazing new things!"
        }
      />
      </PinkDiv>
      <InternshipsSection>
        <Heading heading="INTERNSHIPS" />
        <Container className="mt-5">
          <Internships
            content={[
              [
                "WEB DEVELOPMENT",
                "USE YOUR WEB-DEV EXPERTISE AND WORK WITH OUR EXCELLENT TEAM TO DEVELOP OUR PLATFORM!",
                WebDevImg,
              ],
              [
                "CONTENT",
                "USE YOUR LANGUAGE SKILLS TO DRAFT CONTENT FOR TGC’S SOCIALS AND CURRICULUM!",
                ContentImg,
              ],
              [
                "OUTREACH",
                "USE YOUR SOCIAL SKILLS AND HELP THE GIRL CODE REACH MORE PEOPLE!",
                OutreachImg,
              ],
              [
                "DESIGN",
                "USE YOUR DESIGN PROWESS TO MAKE CREATIVE DIGITAL CONTENT FOR TGC",
                DesignImg,
              ],
              [
                "SOCIAL MEDIA",
                "USE YOUR SOCIAL MEDIA SAVVINESS TO EXPAND TGC’S SOCIAL PRESENCE!",
                SocialMediaImg,
              ],
            ]}
          />
        </Container>
        <Button Text={"Apply Now"} link='https://docs.google.com/forms/d/e/1FAIpQLSdNnrbYFbdkTMnlod-Pp74KRPLipqN2RHmT1gwDoudFcxbG9Q/viewform' width = '20vw' style={{alignSelf: 'center'}}/>
      </InternshipsSection>
      <JoinCommunity />
      <StartChapterSection>
        <Heading heading={"Start a chapter"} />
        <StartChapter />
      </StartChapterSection>
      <DonateBg>
        <Donate />
      </DonateBg>
      <Footer />
    </>
  );
};

export default JoinUs;
