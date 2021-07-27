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
    this.setState(
      {
        team: team.userData,
        leading: false,
      },
      () => {}
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
              subtitle="Team work makes the dreamwork!"
              buttons={[
                { text: "INTERN WITH US" },
                { text: "START A CHAPTER" },
                { text: "JOIN OUR COMMUNITY" },
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
                heading="Our Story"
                text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
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
