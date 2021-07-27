import React, { useEffect } from "react";
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
  ButtonDiv,
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
import PageHeader from "../../components/PageHeader/Header.component";
import TextCard from "../../components/TextCard/textcard.component";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="white"
      />

      <PageHeader
        img={JoinImg}
        title="Join Us"
        subtitle="Help us reach our mission!"
        buttons={[
          {
            text: "INTERN WITH US",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdNnrbYFbdkTMnlod-Pp74KRPLipqN2RHmT1gwDoudFcxbG9Q/viewform",
          },
          {
            text: "JOIN/START A CHAPTER",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform",
          },
          {
            text: "JOIN OUR COMMUNITY",
            link: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSeqIjXp77VuEHqxevq3hdw_myuCVzYGJsKzFNpdWYwHKbNI-Q/viewform",
          },
        ]}
        imgWidth="90%"
      />

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
                "CONTENT",
                "Use your language skills to draft content for TGC!",
                ContentImg,
              ],
              [
                "OUTREACH",
                "Use your marketing skills to help TGC reach more people!",
                OutreachImg,
              ],
              [
                "DESIGN",
                "Use your design prowess to create creative digital art for TGC!",
                DesignImg,
              ],
              [
                "SOCIAL MEDIA",
                "Use your Social Media Savviness to expand TGC's social presence!",
                SocialMediaImg,
              ],
            ]}
          />
        </Container>
        <ButtonDiv>
          <Button
            Text={"Apply Now"}
            link="https://docs.google.com/forms/d/e/1FAIpQLSdNnrbYFbdkTMnlod-Pp74KRPLipqN2RHmT1gwDoudFcxbG9Q/viewform"
            width="100%"
            style={{ alignSelf: "center" }}
          />
        </ButtonDiv>
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
