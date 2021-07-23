import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { GoogleSpreadsheet } from "google-spreadsheet";

import projectpic from "../../assets/IndWorkshop/projectpic.jpg";

import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import {
  MainHeading,
  HeaderText,
  DonateSection,
  StatsBg,
  HeadingStyle,
  TestimonialBg,
  BuildCardBg,
  PinkBigDiv,
} from "./build.styles";
import Heading from "../../components/Heading/heading.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import Stats from "../../components/Stats/stats.component";
import Card from "../../components/Card/card.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import build from '../../assets/build/build.png'
import { DonateBg } from "../ChapterPage/chapter.styles";
class BuildPrevious extends Component {
  state = {};

  fetchData = async () => {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(
      "1L_Etdeh13tOV5BJvodoV7J8rM3HH3lDWt_CYYvLqKrs"
    );

    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo(); // loads document properties and worksheets
    const firstSheet = doc.sheetsByIndex[0];
    const upcomingWorkshops = await firstSheet.getRows();

    const secondSheet = doc.sheetsByIndex[1];
    const pastWorkshops = await secondSheet.getRows();

    //

    // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    //
    //

    // // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: "hot new sheet!" });
    // await newSheet.delete();
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
        <Container style={{ paddingTop: "6rem" }}>
          <Row>
            <Col md={5}>
              <MainHeading>BUILD 3.0</MainHeading>
              <HeaderText>It's bigger. It's better. It's back</HeaderText>
            </Col>
            <Col xs={0} md={1} />
            <Col md={6}>
              <Image src={build} alt="Join Us" fluid />
            </Col>
          </Row>
        </Container>
        <StatsBg>
          <Stats
            stats={[
              ["70", "FLAGSHIP STAT1"],
              ["400+", "FLAGSHIP STAT2"],
              ["35", "FLAGSHIP STAT3"],
            ]}
          />
        </StatsBg>

        <PinkTextBox
          heading={"WHAT IS BUILD"}
          text={
            "At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them. Through our platform and intuitive curriculum, we plan to give rise to a new generation of female programmers set to take the world by storm."
          }
        />
        <HeadingStyle>
          <Heading heading="PROJECT SHOWCASE" />
        </HeadingStyle>
        <BuildCardBg>
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        </BuildCardBg>
        <PinkBigDiv>
        <TestimonialBg>
          <Testimonial
            name="-John Doe"
            text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them."
          />
        </TestimonialBg>
        </PinkBigDiv>
        <HeadingStyle>
          <Heading heading="PAST BUILD BOOTCAMPS" />
        </HeadingStyle>
        <BuildCardBg>
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={false}
        />
        
        </BuildCardBg>
        <DonateBg>
          <Donate />
        </DonateBg>
        <Footer />
      </>
    );
  }
}

export default BuildPrevious;
