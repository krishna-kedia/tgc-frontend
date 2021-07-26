import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller, Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HeaderDiv,
  MainContent,
  Heading,
  SubHeading,
  ButtonsDiv,
  OutlineButton,
  PinkTextBoxDiv,
  StatsDiv,
  SocialMediaSection,
  YouTubeSection,
  HeadingDiv,
  StartAChapterDiv,
  Corousel,
} from "./home.page.style";
import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import workshops from "../../assets/homepage/Workshops PNG.png";
import community from "../../assets/homepage/Community PNG.png";
import mentors from "../../assets/homepage/Mentors PNG.png";
import online from "../../assets/homepage/Online PNG.png";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
import TextCard from "../../components/TextCard/textcard.component";
import CommunitySection from "../../components/Community/community.component";
//import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Headingg from "../../components/Heading/heading.component";
import Footer from "../../components/Footer/footer.component";

const Header = () => {
  return (
    <HeaderDiv>
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="white"
        textIn="white"
      />

      <MainContent>
        <Heading>Welcome to The Girl Code</Heading>
        <SubHeading>
          Inspiring girls to discover and pursue programming
        </SubHeading>
        <ButtonsDiv>
          <Link to="/joinus" style={{ textDecoration: "none", width: "30%" }}>
            <OutlineButton>JOIN US</OutlineButton>
          </Link>
          <Link style={{ textDecoration: "none", width: "30%" }}>
            <OutlineButton
              onClick={() => {
                scroller.scrollTo("stats");
              }}
            >
              LEARN MORE
            </OutlineButton>
          </Link>
        </ButtonsDiv>
      </MainContent>
    </HeaderDiv>
  );
};

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Element name="stats">
        <StatsDiv>
          <Stats
            stats={[
              ["10", "ACTIVE CHAPTERS"],
              ["1600+", "STUDENTS IMPACTED"],
              ["35+", "WORKSHOPS CONDUCTED"],
            ]}
          />
        </StatsDiv>
      </Element>

      <PinkTextBoxDiv id="mission">
        <PinkTextBox
          heading="MISSION"
          text="Bridging the gender gap in Tech one free workshop at a time! We host fun and friendly workshops for young students to learn programming at schools and universities local to them. Through our unique approach, and our intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm!"
        />
      </PinkTextBoxDiv>

      <CommunitySection
        content={[
          [
            "Confidence",
            "Instill confidence in young girls to stand tall and unapologetically in an industry dominated by men.",
          ],
          [
            "Community",
            "Build a tight-knit community of young female programmers to support, motivate, and inspire each other.",
          ],
          [
            "Curiosity",
            "Inspire students to seek more knowledge, to question everything, and to build on their curiosity for Computer Science.",
          ],
        ]}
      />

      <Corousel>
        <ImageCorousel
          imgUrls={[
            "https://i.imgur.com/RyYGlc8.jpg",
            "https://i.imgur.com/8S2wL4J.jpg",
            "https://i.imgur.com/iltxAcZ.jpg",
            "https://i.imgur.com/RyYGlc8.jpg",
            "https://i.imgur.com/2w0bA3I.jpg",
            "https://i.imgur.com/eStHKKq.jpg",
          ]}
        />
      </Corousel>
      <TextCard
        heading="OUR PROGRAMS"
        content={[
          [
            "WORKSHOPS",
            "We host free coding workshops in Python & HTML CSS at schools and universities.",
            workshops,
          ],
          [
            "ONLINE",
            "Due to covid-19, we’ve moved our workshops online to virtual platforms that will allow us for a more hands-on teaching.",
            online,
          ],
          [
            "COMMUNITY",
            "Our slack community has over 300 women who love Computer Science! We also host regular bootcamps on all things Tech.",
            community,
          ],
          [
            "MENTORS",
            "One-on-One help and advice from experienced women in tech! We have mentors ready to help for our workshops and slack community!",
            mentors,
          ],
        ]}
      />
      <SocialMediaSection>
        <Headingg heading={"SOCIAL MEDIA"} />
        <p style={{ fontWeight: "500" }}>
          Selection from our{" "}
          <span style={{ color: "#d74b8d", fontWeight: "600" }}>socials</span>
        </p>
        <SocialMediaDiv />
      </SocialMediaSection>

      <YouTubeSection>
        <HeadingDiv>
          <Headingg heading={"FEATURED"} />
        </HeadingDiv>
        <YoutubeVideo
          videoOne="https://www.youtube.com/watch?v=CkTAROiMe6M&ab_channel=TheGirlCode"
          videoTwo="https://www.youtube.com/watch?v=GBhOYmd13Qo&ab_channel=TheGirlCode"
          textOne="Join us as we speak with Mina, and break down the fundamentals of technology on 'Tech Talks'. She breaks down web development for us and talks about her journey in the field."
          textTwo="Join us as we speak with Annie and Kass to break down the fundamentals of frontend development on “Tech Talks”. They speak about out the future of frontend with sites like Wix and AIs like GPT3"
        />
      </YouTubeSection>
      <StartAChapterDiv>
        <Headingg heading={"Start A Chapter"} />
        <StartChapter />
      </StartAChapterDiv>
      <Donate />
      <Footer />
    </div>
  );
};
export default Home;
