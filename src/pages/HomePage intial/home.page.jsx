import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  StyledJumbo,
  StyleHead,
  StyledButton,
  StyledRow,
  StyledContainer,
  WhiteBackground,
  VideoContainer,
  PinkBackground,
  SuperheroDiv,
  SuperHeroTextDiv,
  SuperHeroImgDiv,
  SuperHeroImg,
  PinkTextBoxDiv,
  StatsDiv,
  StylePee,
  StyledButtonOne,
  StyledButtonTwo,
  SocialMediaSection,
  YouTubeSection,
  HeadingDiv,
  StartAChapterDiv,
  Corousel,
} from "./home.page.style";
import superhero from '../../assets/homepage/superhero.png'
import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import workshops from '../../assets/homepage/webdev.png'
import community from '../../assets/homepage/community.png'
import mentors from '../../assets/homepage/mentors.png'
import online from '../../assets/homepage/online.png'
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../../components/SocialMediaDiv/SocialMediaDiv.component";
import TextCard from "../../components/TextCard/textcard.component";
import CommunitySection from "../../components/Community/community.component";
import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
const Header = () => {
  return (
    <div>
      <StyledJumbo>
        <StyledContainer>
          <StyledRow className="justify-content-center mt-5">
            <StyleHead>Welcome To The Girl Code</StyleHead>
          </StyledRow>
          <StyledRow className="justify-content-center mt-2">
            <StylePee>
              We seek to inspire girls to discover and pursue programming
            </StylePee>
          </StyledRow>
          <StyledRow className="justify-content-center mt-5">
            <StyledButtonOne variant="outline-light" className="rounded-0">
              JOIN US
            </StyledButtonOne>{" "}
            <StyledButtonTwo variant="outline-light" className="rounded-0">
              LEARN MORE
            </StyledButtonTwo>{" "}
          </StyledRow>
        </StyledContainer>
      </StyledJumbo>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <GlobalStyle/>
      
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="white"
        textIn="white"
      />
      <Header />
      <StatsDiv>
        <Stats
          stats={[
            ["10", "ACTIVE CHAPTERS"],
            ["1600+", "STUDENTS IMPACTED"],
            ["35+", "WORKSHOPS CONDUCTED"],
          ]}
        />
      </StatsDiv>
      <PinkTextBoxDiv>
        <PinkTextBox
          heading="MISSION"
          text="Bridging the gender gap in Tech one free workshop at a time! We host fun and friendly workshops for young students to learn programming at schools and universities local to them. Through our unique approach, and our intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm!"
        />
      </PinkTextBoxDiv>
      {/* <SuperheroDiv>
        <SuperHeroTextDiv>
        </SuperHeroTextDiv>
        <SuperHeroImgDiv>
          <SuperHeroImg src={superhero} />
        </SuperHeroImgDiv>
      </SuperheroDiv> */}

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
            "homepage/imagegallery/workshop.png",
            "homepage/imagegallery/workshop2.jpg",
            "homepage/imagegallery/workshop3.jpg",
            "homepage/imagegallery/workshop4.jpg",
          ]}
        />
      </Corousel>
      
      <TextCard
        heading="OUR PROGRAM"
        content={[
          [
            "WORKSHOPS",
            "We host free coding workshops in Python & HTML CSS at schools and universities.",
            workshops,
          ],
          [
            "ONLINE",
            "Due to covid-19, we’ve moved our workshops online to virtual platforms that will allow us for a more hands-on teaching.",
            online
          ],
          [
            "COMMUNITY",
            "We have a Slack Community of over 500 TGC workshop attendees!",
            community
          ],
          [
            "MENTORS",
            "One-on-One help and advice from experienced women in tech! We have mentors ready to help for our workshops and slack community!",
            mentors
          ],
        ]}
      />
      <SocialMediaSection>
        <Heading heading="SOCIAL MEDIA" />
        <p style={{ fontWeight: "500" }}>
          Selection from our <span style={{ color: "#d74b8d" }}>socials</span>
        </p>
        <SocialMediaDiv />
      </SocialMediaSection>

      <YouTubeSection>
        <HeadingDiv>
          <Heading heading="featured" />
        </HeadingDiv>
        <YoutubeVideo
          videoOne="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          videoTwo="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          textOne="Join us as we speak with Mina, and break down the fundamentals of technology on 'Tech Talks'. She breaks down web development for us and talks about her journey in the field."
          textTwo="Join us as we speak with Annie and Kass to break down the fundamentals of frontend development on “Tech Talks”. They speak about out the future of frontend with sites like Wix and AIs like GPT3"
        />
      </YouTubeSection>
      <StartAChapterDiv>
        <Heading heading="Start A Chapter" />
        <StartChapter />
      </StartAChapterDiv>
      <Donate />
      <Footer />
    </div>
  );
};
export default Home;
