import React from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import Heading from "../../components/Heading/heading.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ProjectCardImg from "../../assets/IndWorkshop/projectpic.jpg";
import Card from "../../components/Card/card.component";
import PinkTextBox from "../../components/PinkTextBox/pinktextbox.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import Acknowledgement from "../../components/Acknowledgement/acknowledgement.component";
import IndWorkshopImg from "../../assets/IndWorkshop/IndWorkshopImg.jpg";
import {
  AcknowledgementBg,
  HeaderBg,
  WorkHeading,
  SubHeading,
  BoxStyle,
  CardHeading,
  CardBg,
  ProjectShowcaseDiv,
  HeaderIconImage
} from "./IndWorkshop.styles";
import { ShowMoreButton } from "../WorkshopPage/workshop.page.style";
import { DonateBg } from "../ChapterPage/chapter.styles";


class IndWorkshop extends React.Component {
  state = {
    workshopInfo: {},
    workshopItems: 4,
    loading: true,
    expanded: false,
    buttonText: "See More Workshops",
    myRef: React.createRef(),
    testimonials: []
  }
  componentDidMount(){
    this.fetchData();
    window.scrollTo(0,0)
  }

  fetchData = async () => {
    const workshopId = this.props.match.params.workshopId
   
    let workshopData = await fetch(`http://143.110.253.103:5000/api/workshop/${workshopId}`)
    workshopData = await workshopData.json()
   
    this.setState({
      workshopInfo: workshopData.workshop,
      loading: false,
      testimonials: workshopData.testimonials
    }, () => {
     
    })


  }
  render() {
    const {
      workshopInfo
    } = this.state
   
    return (
      <div>
        <NavBar
        bgOut="transparent"
        bgIn="#F05680"
        textOut="#F05680"
        textIn="white"
        />
        <HeaderBg>
        <Container fluid>
      <Row>
        <HeaderIconImage>
          <Image style={{ paddingLeft: "1rem" }} src={IndWorkshopImg} fluid />
        </HeaderIconImage>
        <Col className="justify-content-center">
          <WorkHeading>{workshopInfo.workshopName}</WorkHeading>
          <SubHeading>{workshopInfo.dates}</SubHeading>
        </Col>
      </Row>
    </Container>
        </HeaderBg>
        <Stats
          stats={[
            [workshopInfo.flagshipStatValue1, 'PARTICIPANTS'],
            [workshopInfo.flagshipStatValue2, 'HOURS'],
            [workshopInfo.flagshipStatValue3, 'DAYS'],
          ]}
        />
        <BoxStyle>
          <PinkTextBox
            heading="MISSION"
            text={workshopInfo.description}/>
        </BoxStyle>

        {
          this.state.loading? null : (
            <BoxStyle>
            <ImageCorousel
            imgUrls={this.state.workshopInfo.carouselImages}
          />
          </BoxStyle>
          )
        }
       {workshopInfo.LOR ? (
          <AcknowledgementBg>
          <Acknowledgement heading="LOR" image={workshopInfo.LOR}/>
        </AcknowledgementBg>
       ): null}
       <DonateBg>
        <Donate
          button="DONATE NOW"
          title="Help support The Girl Code"
          content="At The Girl Code, we aim to bridge the gender gap in the tech community by inspiring young girls to learn programming by hosting workshops."
        />
        </DonateBg>
        <Footer />
      </div>
    );
  }
}

export default IndWorkshop;
