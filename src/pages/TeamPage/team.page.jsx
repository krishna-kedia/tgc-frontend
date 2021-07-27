import React, { Component } from "react";
import { Container, Button, Col, Row, Image, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  StyledJumbo,
  StyleHead,
  StylePee,
  Bord,
  TeamDiv,
  PinkTextBoxDiv,
} from "./team.page.styles";
import team from "../../assets/team/team.png";
import ChapterHeaderImg from "../../assets/Chapter/chapter_header.png";
import GlobalStyle from "../globalStyles";
import NavBar from "../../components/NavBar/NavBar.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import ShadowButton from "../../components/Button/button.component";
import Directors from "../../components/Directors/Directors.component";
import Team from "../../components/Team/Team.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import { PinkDiv } from "../JoinUsPage/joinus.page.style";
import PageHeader from "./../../components/PageHeader/Header.component";
import Heading from "../../components/Heading/heading.component";
import { DonateBg } from "../ChapterPage/chapter.styles";

export default class Home extends Component {
  state = {
    loading: true,
  };

  fetchData = async () => {
    let team = await fetch(`http://143.110.253.103:5000/api/users`);
    team = await team.json();
    console.log(team)
    this.setState(
      {
        team: team.userData,
        leading: false,
      },
      () => {console.log(this.state)}
    );
  };

  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
  }
  render() {
    const { org, design, marketing, webD, socialMedia } = this.state;
    return (
      <div>
        {this.state.team ? (
          <>
            <GlobalStyle />
            <NavBar
              bgOut="transparent"
              bgIn="#F05680"
              textOut="#F05680"
              textIn="white"
            />

            <PageHeader
              img={team}
              title="Our Team"
              imgWidth="90%"
              subtitle="Teamwork makes the dreamwork!"
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
            />

            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "1em",
              }}
            >
              <Heading heading="DIRECTORS" />
            </div>

            <Directors
              imgUrlOne={this.state.team.org[3]}
              nameOne={this.state.team.org[2]}
              imgUrlTwo={this.state.team.org[1]}
              nameTwo={this.state.team.org[0]}
            />

            <PinkTextBoxDiv>
              <PinkTextBox
                heading="OUR STORY"
                text="The Girl Code was established by two 16 year old high school students, 
                Japnit and Samriddhi, when they were confronted by the stark gender disparity in 
                their CS classes. Over the past 3 years, TGC has grown from excited conversations 
                over lunch break, to an organization of over 80 members across 3 countries."
              />
            </PinkTextBoxDiv>

            <TeamDiv>
              <Team
                backgroundColour="#ffffff"
                heading="DESIGN DEPARTMENT"
                leads={this.state.team.design.lead}
                mems={this.state.team.design.mems}
              />
            </TeamDiv>
            <TeamDiv>
              <Team
                backgroundColour="#FBEDF3"
                heading="MARKETING DEPARTMENT"
                leads={this.state.team.marketing.lead}
                mems={this.state.team.marketing.mems}
              />
            </TeamDiv>
            <TeamDiv>
              <Team
                backgroundColour="#ffffff"
                heading="WEB DEVELOPMENT DEPARTMENT"
                leads={this.state.team.webD.lead}
                mems={this.state.team.webD.mems}
              />
            </TeamDiv>
            <TeamDiv>
              <Team
                backgroundColour="#FBEDF3"
                heading="SOCIAL MEDIA DEPARTMENT"
                leads={this.state.team.socialMedia.lead}
                mems={this.state.team.socialMedia.mems}
              />
            </TeamDiv>
            <DonateBg>
              <Donate />
            </DonateBg>

            <Footer />
          </>
        ) : null}
      </div>
    );
  }
}
