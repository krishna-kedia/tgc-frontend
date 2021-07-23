import React from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar.component";
import GlobalStyle from "../globalStyles";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  MainHeading,
  HeaderText,
  PinkBoxDiv,
  ImageBox,
  UpcomingWorkshopsDiv,
  PastWorkshopsDiv,
  StartChapterSection,
  DonateSection,
  CardsDiv,
  ShowMoreButton,
} from "./workshop.page.style";
import Heading from "../../components/Heading/heading.component";
import Card from "../../components/Card/card.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import WorkshopsImage from "../../assets/WorkshopsImage.jpg";
import WorkshopsHeader from "../../assets/WorkshopsHeader.jpg";
import StartChapter from "../../components/StartChapter/startchapter.component";
import Donate from "../../components/Donate/donate.component";
import Stats from "../../components/Stats/stats.component";
import Footer from "../../components/Footer/footer.component";
import ShadowButton from "../../components/Button/button.component";

class Workshop extends React.Component {
  state = {
    upcomingWorkshopsData: [],
    pastWorkshopsData: [],
    upcomingWorkshopItems: 4,
    pastWorkshopItems: 4,
    loading: true,
    buttonText: "See More Workshops",
    expanded: false,
    myRef: React.createRef(),
  };

  fetchData = async () => {
    let workshops = await fetch('/workshops')
    workshops = await workshops.json()
   
    this.setState({
      pastWorkshopsData: workshops.workshops,
      loading: false
    })
  };

  componentDidMount() {
    this.fetchData();
    window.scrollTo(0,0)
  }

  click = (e) => {
   
    this.props.history.push(`/workshop/${e.target.dataset.id}`)
  }

  toggleShow = () => {
    if (this.state.expanded === false) {
      this.setState({
        pastWorkshopItems: this.state.pastWorkshopsData.length,
        buttonText: "Show Less",
        expanded: true,
      });
    } else {
      this.setState({
        pastWorkshopItems: 4,
        buttonText: "See More Workshops",
        expanded: false,
      });
      this.state.myRef.current.scrollIntoView();
    }
  };

  render() {
    const {
      pastWorkshopsData,
      upcomingWorkshopsData,
      loading,
      buttonText,
    } = this.state;
   
    return (
      <>
        <GlobalStyle />
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
        <Container style={{ paddingTop: "5rem" }}>
          <Row>
            <Col md={7}>
              <Image src={WorkshopsHeader} alt="Join Us" fluid />
            </Col>
            <Col md={5} className="text-center">
              <MainHeading>Our Workshops </MainHeading>
              <HeaderText>We host free coding workshops!</HeaderText>
              <ShadowButton Text={"CONDUCT A WORKSHOP"} />
            </Col>
          </Row>
        </Container>
        <Container className="my-4">
          <Stats
            stats={[
              ["70", "FLAGSHIP STAT1"],
              ["400+", "FLAGSHIP STAT2"],
              ["35", "FLAGSHIP STAT3"],
            ]}
          />
        </Container>
        <ImageBox>
          <Heading heading={"COVID RESPONSE"} />
          <Image
            src={WorkshopsImage}
            fluid
            style={{ maxHeight: "60vh", padding: "0.5rem 1rem" }}
          />
        </ImageBox>
        <PinkBoxDiv>
          <PinkTextBox
            heading={"OUR COVID-19 IMPACT"}
            text={
              "The 2020 Coronavirus Pandemic brought a plague of troubles (literally). But, The Girl Code team believes in dealing with tough situations indomitably, and we can proudly say we doubled our productivity in the summer months of lockdown! TGC hosted over 15 workshops, including a summer bootcamp, BUILD (hyperlink), that saw over 500 participants. We also hosted several “Intro to Tech” workshops for girls in Rural India!"
            }
          />
        </PinkBoxDiv>
        {/* <UpcomingWorkshopsDiv>
          <Heading heading={"UPCOMING WORKSHOPS"} />
          {loading ? (
            <Spinner animation="border" variant="danger" className="mt-5" />
          ) : (
            <CardsDiv className="my-5 flex-wrap">
              {upcomingWorkshopsData
                .slice(0, this.state.upcomingWorkshopItems)
                .map((card) => (
                  <Card
                    image={card.image}
                    icons={card.icons}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    isButton={card.isButton}
                  />
                ))}
            </CardsDiv>
          )}
        </UpcomingWorkshopsDiv> */}
        <PastWorkshopsDiv ref={this.state.myRef}>
          <Heading heading={"PAST WORKSHOPS"} />
          {loading ? (
            <Spinner animation="border" variant="danger" className="mt-5" />
          ) : (
            <CardsDiv className="mt-5 flex-wrap">
              {pastWorkshopsData
                .slice(0, this.state.pastWorkshopItems)
                .map((card) => (
                  <Card
                  onClick={this.click}
                    key={card._id}
                    image={card.image}
                    //icons={card.courseIcon}
                    title={card.workshopName}
                    id={card._id}
                    subtitle={card.dates}
                    icon={card.courseIcon}
                    iconText={card.courseName}
                    height = '100vh'
                    description={card.description}
                    isButton='hi'
                  />
                ))}
            </CardsDiv>
          )}
          {!loading ? (
            <ShowMoreButton onClick={this.toggleShow}>
              {buttonText} {">"}
            </ShowMoreButton>
          ) : (
            " "
          )}
        </PastWorkshopsDiv>

        <StartChapterSection style={{backgroundColor: "#FBEDF3", padding: '2.5em 0'}}>
          <Heading heading={"Start a chapter"} />
          <StartChapter />
        </StartChapterSection>
          <Donate />
        <Footer />
      </>
    );
  }
}

export default Workshop;
