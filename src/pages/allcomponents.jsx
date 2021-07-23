import React from "react";

import NavBar from "../components/NavBar/NavBar.component";
import GlobalStyle from "./globalStyles";
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo.component";
import SocialMediaDiv from "../components/SocialMediaDiv/SocialMediaDiv.component";
import LeadCard from "../components/LeadCard/LeadCard.component";
import MemberCard from "../components/MemberCard/MemberCard.component";
import Team from "../components/Team/Team.component";
import Testimonial from "../components/Testimonial/testimonial.component";
import Donate from "../components/Donate/donate.component";
import StartChapter from "../components/StartChapter/startchapter.component";
import Card from "../components/Card/card.component";
import Stats from "../components/Stats/stats.component";
import Footer from "../components/Footer/footer.component";
//import CommunitySection from "../components/Community/community.component"

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="black"
        textIn="white"
      />
      <YoutubeVideo
        videoOne="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        videoTwo="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        textOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        textTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      {/*<TextCard
      heading={"OUR PROGRAM"}
        content={[
          ["WORKSHOPS"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT " ,"https://imgur.com/jCyrXv4.jpg"],
          ["ONLINE"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ", "https://imgur.com/Yh5eL7E.jpg"],
          ["COMMUNITY"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ", "https://imgur.com/mrZQGbn.jpg"],
          ["MENTORS"," FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT 1FLAGSHIP STAT ","https://imgur.com/6c5Rvdc.jpg"],
        ]}
      />*/}
      {/*
      <CommunitySection
        content={[
          [
            "Confidence",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ],
          [
            "Community",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ],
          [
            "Curiosity",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ],
        ]}
      />   
      */}
      <SocialMediaDiv />
      <LeadCard
        imgUrl="https://source.unsplash.com/Dm-qxdynoEc/800x799"
        name="Mushroom boss"
        designation="Head Of Fungi Development"
      />
      <MemberCard
        imgUrl="https://source.unsplash.com/Dm-qxdynoEc/800x799"
        name="Mushroom"
      />

      <Team />
      {/* <Stats stats={[{'chapter': 10}, '20']}/>
      <TextCard heading="Dummy heading" content={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"]} /> */}
      <Stats
        stats={[
          ["70", "FLAGSHIP STAT1"],
          ["400+", "FLAGSHIP STAT2"],
          ["35", "FLAGSHIP STAT3"],
        ]}
      />
      <StartChapter
        heading="Start A Chapter"
        searchItems={["Delhi", "Mumbai", "Pune"]}
      />
      <Testimonial
        name="krishna"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      {/* <StartChapter /> */}
      <Donate />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
