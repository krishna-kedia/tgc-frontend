import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";

import { Container, Row, Col, Image } from "react-bootstrap";
import projectpic from "../../assets/IndWorkshop/projectpic.jpg";
import build from "../../assets/build/build.png";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import JoinImg from "../../assets/joinuspage.jpg";
import {
  MainHeading,
  HeaderText,
  DonateSection,
  StatsBg,
  HeadingStyle,
  BuildCardBg,
  TestimonialBg,
  PinkBigDiv,
} from "./build.styles";
import Heading from "../../components/Heading/heading.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import Stats from "../../components/Stats/stats.component";
import Card from "../../components/Card/card.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import ShadowButton from "../../components/Button/button.component";
import { PinkTextBoxDiv } from "../HomePage/home.page.style";

class BuildActive extends Component {
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
        {/* <Container style={{ paddingTop: "6rem" }}>
          <Row>
          <Col md={6}>
              <Image src={build} alt="Join Us" fluid />
            </Col>
            <Col md={5}>
              <MainHeading>BUILD 3.0</MainHeading>
              <HeaderText>It's bigger. It's better. It's back</HeaderText>
              <ShadowButton Text={'Register'} />
            </Col>
            <Col xs={0} md={1} />
           
          </Row>
        </Container> */}
        <div
          style={{
            padding: "2rem 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Image src={build} alt="Join Us" fluid />
          </div>
          <div style={{}}>
            <div style={{ paddingTop: "5rem" }}>
              <MainHeading>BUILD 3.0</MainHeading>
              <HeaderText>It's bigger. It's better. It's back</HeaderText>
              <ShadowButton
                Text={"Register"}
                link="https://docs.google.com/forms/d/e/1FAIpQLSff45YxaIYoqpu3Sc_s6M115moPKG0SL0NSI0a6nHFIIdXWjQ/viewform"
              />
            </div>
          </div>
        </div>
        {/* <StatsBg>
          <Stats
            stats={[
              ["3rd August", " REGISTRATION DEADLINE FOR PART 1"],
              ["400+", "FLAGSHIP STAT2"],
              ["9th August", "REGISTRATION DEADLINE FOR PART 2"],
            ]}
          />
        </StatsBg> */}

        <PinkTextBoxDiv>
          <PinkTextBox
            style={{ margin: "1em" }}
            heading={"WHAT IS BUILD"}
            text={
              "Over the summer of 2020, TGC hosted #Build, a project-oriented summer boot camp aimed at teaching students Python. Conducted in both Hindi and English, #Build 1.0 was a success, which led to the creation of #Build 2.0. The first iteration of #Build culminated in an end project- a blog (using HTML and CSS), and the second had a game (using Python and Pygame) to provide the participants a sense of achievement. Over 500 students participated in both the workshops."
            }
          />
        </PinkTextBoxDiv>
        <HeadingStyle>
          <Heading heading="COURSES" />
        </HeadingStyle>
        {/* <BuildCardBg>
        <Card
          //image={projectpic}
          title=" PART 1: 5-10 August, 2021"
          subtitle="Python Geared Towards ML and Data Science"
          // icons={[[]]}
          description="Registration open till 3rd August 2021"
         
        />
        <Card
         // image={projectpic}
          title=" PART 2: 12-16 August, 2021"
          subtitle="Deep Dive in ML and Data Science Using Python"
          // icons={[[]]}
          description= "Registration open till 9rd August 2021"
         
        />
        
        </BuildCardBg> */}
        <div style={{ display: "flex", textAlign: "center", padding: "2em 0" }}>
          <div style={{ width: "50vw", borderRight: "1px solid black" }}>
            <div
              style={{
                color: "#f05680",
                fontWeight: "800",
                fontSize: "2em",
              }}
            >
              Part 1: Python Course
            </div>

            <h4>Dates: 5 - 10 August, 2021</h4>
            <p>Registration Open Till: 3 August, 2021</p>
            <h5>Topics Covered:</h5>
              <div>Basics of Python</div>
            
            <p style={{padding: ' 3.5em 2em 0 2em'}}>
            End Project: Making your own model using regression and classification algorithms. 
            </p>
          </div>
          <div style={{ width: "50vw" }}>
            <div
              style={{
                color: "#f05680",
                fontWeight: "800",
                fontSize: "2em",
              }}
            >
              Part 2: ML Course
            </div>
            <h4>Dates: 5 - 10 August, 2021</h4>
            <p>Registration Open Till: 8 August, 2021</p>
            <h5>Topics Covered:</h5>
              <div>Introduction to AI and ML</div>
              <div>Preprocessing and Analysing data</div>
            
            
            <p style={{padding: '2em 2em 0 2em'}}>
            End Project: Making your own model using regression and classification algorithms. 
            </p>
          </div>
        </div>
        <HeadingStyle>
          <Heading heading="FAQs" />
        </HeadingStyle>
        <div style={{ padding: "1em 4em" }}>
          <div
            style={{
              color: "#f05680",
              fontWeight: "800",
              fontSize: "2em",
            }}
          >
            What is build?
          </div>
          <p>
            Every year, TGC hosts a month-long summer boot camp aka fundraiser
            to empower girls and bring more of them into tech. These boot camps
            are focussed towards Python, Data Science and Machine Learning. The
            build is the brand name for our summer bootcamps and we have had 2
            iterations of the same. #Build3.0 comes out on August 5th 2021.
            Build always culminates into an end-project like a game or a blog,
            so you can add your project into a resume for brownie points!
            Certificates will be awarded to all those who successfully complete
            their projects!
          </p>
          <div
            style={{
              Width: "80vw",
              height: "0.02em",
              backgroundColor: "#785189",
            }}
          ></div>
        </div>
        <div style={{ padding: "1em 4em" }}>
          <div
            style={{
              color: "#f05680",
              fontWeight: "800",
              fontSize: "2em",
            }}
          >
            Is there a Fee To Attend?
          </div>
          <p>
            We won’t call it a ‘nominal fee’ as much as we’d call it a donation.
            It totally depends on you how much you’d like to donate.Through the
            fundraiser The Girl Code is aiming to collect funds to teach
            underprivileged girls. One can make a donation starting at Rs. 50/ $
            1 to participate in the program. Feel free to donate more, the funds
            all go into empowering girls!
          </p>
          <div
            style={{
              Width: "80vw",
              height: "0.02em",
              backgroundColor: "#785189",
            }}
          ></div>
        </div>
        <div style={{ padding: "1em 4em" }}>
          <div
            style={{
              color: "#f05680",
              fontWeight: "800",
              fontSize: "2em",
            }}
          >
            How can I donate?
          </div>
          <p>
            You can pay through Paytm or Google pay on '+91 9911822443'/through
            Paypal or GrabPay on +65 96823656. Minimum donation for python: 150
            Minimum donation for ML: 100 Both: 200
          </p>
          <div
            style={{
              Width: "80vw",
              height: "0.02em",
              backgroundColor: "#785189",
            }}
          ></div>
        </div>
        <div style={{ padding: "1em 4em" }}>
          <div
            style={{
              color: "#f05680",
              fontWeight: "800",
              fontSize: "2em",
            }}
          >
            Who all can participate?
          </div>
          <p>
            #Build3.0 is open to all genders and ages! You also don’t require
            any programming experience or pre requisite knowledge. We will cater
            to your needs individually! Courses will be held in both Hindi and
            English!
          </p>
        </div>
        {/* <StayInTouchBg>
            <h4>STAY IN TOUCH</h4>
            <p>Thank you for your interest in #Build. Summer 2020 applications are now closed. If you have already applied, keep your eye on your inbox for updates and for application status. If you'd like to be notified of future opportunities, please enter your email here. </p>
          </StayInTouchBg> */}
        {/* <TestimonialBg>
          <Testimonial
            name="-John Doe"
            text="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops at schools and universities local to them."
          />
        </TestimonialBg> */}
        {/* <PinkBigDiv>
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
          isButton={true}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={true}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={true}
        />
        <Card
          image={projectpic}
          title=" Project Name"
          subtitle="PERSON NAME"
          // icons={[[]]}
          description="Python Course"
          isButton={true}
        />
        </BuildCardBg>
        </PinkBigDiv> */}
        <DonateSection>
          <Donate />
        </DonateSection>
        <Footer />
      </>
    );
  }
}

export default BuildActive;
