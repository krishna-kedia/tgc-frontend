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
  CoursesContainer,
  CourseDiv,
  HeadingStyleBuild,
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
import { AcknowledgementBg } from "../IndWorkshopPage/IndWorkshop.styles";
import Acknowledgement from "../../components/Acknowledgement/acknowledgement.component";
import poster from "./../../assets/build.png";
import PageHeader from "../../components/PageHeader/Header.component";
import { DonateBg } from "../ChapterPage/chapter.styles";
import IndWorkshopImg from "../../assets/IndWorkshop/IndWorkshopImg.jpg";

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
          textIn="white"
        />

        <PageHeader
          img={IndWorkshopImg}
          title="BUILD 3.0"
          subtitle="It's bigger. It's better. It's back"
          imgWidth="100%"
          buttons={[
            {
              text: "REGISTER NOW",
              link: "https://docs.google.com/forms/d/e/1FAIpQLSff45YxaIYoqpu3Sc_s6M115moPKG0SL0NSI0a6nHFIIdXWjQ/viewform",
            },
          ]}
        />

        {/* <div
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
        </div> */}
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
              "This year, #Build is back for a quick bootcamp on Python and Machine Learning!\
              As always, Build is a fundraiser that aims to raise money to empower underprivileged girls to learn coding.\
              Take this chance to redefine your ML and Data Science knowledge with a quick bootcamp! "
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
        <CoursesContainer>
          <CourseDiv>
            <div
              style={{
                color: "#f05680",
                fontWeight: "800",
                fontSize: "2em",
              }}
            >
              Part 1: Python Geared Towards ML
            </div>

            <h4>Dates: 5 - 10 August, 2021</h4>
            <p>Registration Open Till: 3 August, 2021</p>
            <p>
              <b>Minimum Donation: Rs 100</b>
            </p>
            <h5>Topics Covered:</h5>
            <div>Basics of Python </div>
            <div>Conditional Statements and Loops </div>
            <div> Functions</div>
            <div> Lists</div>
            <div> Numpy and Matplotlib </div>

            <p style={{ padding: " 2em 2em 0 2em" }}>
              End Project: Data exploration and visualisation with numpy and
              matplotlib.
            </p>
          </CourseDiv>
          <CourseDiv style={{ border: "none" }}>
            <div
              style={{
                color: "#f05680",
                fontWeight: "800",
                fontSize: "2em",
              }}
            >
              Part 2: ML Course
            </div>
            <h4>Dates: 12 - 16 August, 2021</h4>
            <p>Registration Open Till: 9 August, 2021</p>
            <p>Prequisite: Python knowledge or Build Python course</p>
            <p>
              <b>Minimum Donation: Rs 150</b>
            </p>
            <h5>Topics Covered:</h5>
            <div>Introduction to AI and ML</div>
            <div>Preprocessing and Analysing data</div>
            <div>Supervised Learning and Unsupervised Learning</div>
            <div>Evaluation Pipeline and metrics</div>
            <p style={{ padding: "2em 2em 0 2em" }}>
              End Project: Making your own model using regression and
              classification algorithms.
            </p>
          </CourseDiv>
        </CoursesContainer>
        <AcknowledgementBg>
          <Acknowledgement heading="MORE INFO!" image={poster} />
        </AcknowledgementBg>
        <HeadingStyleBuild>
          <Heading heading="FAQs" />
        </HeadingStyleBuild>
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
            Every year, TGC hosts a month-long fundraising summer boot camp that
            aims to raise money to empower underprivileged girls to learn
            coding. This year, the bootcamp is focused towards Python, Data
            Science and Machine Learning. “Build” is the brand name for our
            summer bootcamp, and we’ve hosted 2 successful iterations it
            (#Build, #Build2.0) #Build3.0 starts on August 5th 2021 and
            culminates with an end-project like a game or a blog, so you can add
            your project into your résumé for brownie points! Certificates will
            be awarded to all those who successfully complete their projects.
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
            We won’t call it a ‘nominal fee,’ but rather a donation. You can
            donate as much (or as little) as you’d like! Through the fundraiser,
            The Girl Code aims to raise money to empower underprivileged girls
            to learn coding. You can make a donation starting at Rs. 100 for
            Python and Rs. 150 for ML. Feel free to donate more, the funds all
            go towards helping those who need it!
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
            You can pay through:
            <br />
            <b>Paytm</b> on +91 9911822443 <br />
            <b>Google Pay</b> on +91 9871332023 <br />{" "}
            <b>GrabPay, Paylah or Paynow </b>
            on +65 96823656 <br />
            <br /> <b>Bank Details</b> <br /> Name: GIRLCODE HUMANITARIAN
            FOUNDATION
            <br />
            Account Number: 920020071693298 <br />
            IFSC code: UTIB0003204 <br />
            Bank Name: Axis Bank, HAUZ KHAS II DEL DL
            <br />
            <br /> Minimum donation for python: Rs. 100 <br />
            Minimum donation for ML: Rs. 150
            <br />
            Both: Rs. 200
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
            to your needs individually! Courses will be held in simple English!
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
        <DonateBg>
          <Donate />
        </DonateBg>
        <Footer />
      </>
    );
  }
}

export default BuildActive;
