import React, { Component } from "react";
import { Col, Row, Image, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar/NavBar.component";
import Stats from "../../components/Stats/stats.component";
import Heading from "../../components/Heading/heading.component";
import StartChapter from "../../components/StartChapter/startchapter.component";
import ImageCorousel from "../../components/ImageCorousel/imagecorousel.component";
import Donate from "../../components/Donate/donate.component";
import Footer from "../../components/Footer/footer.component";
import ChapterHeaderImg from "../../assets/Chapter/chapter_header.png";
import ChapterCardImg from "../../assets/Chapter/chaptercard.jpg";
import ShadowButton from "../../components/Button/button.component";
import Card from "../../components/Card/card.component";
import {
  ButtonBg,
  CardBg,
  ChapterHeading,
  DonateBg,
  HeaderBg,
  HeaderImg,
  HeadingStyle,
  ImgCarouselStyle,
  ImgStyle,
  HeaderInfo,
} from "./chapter.styles";
import { CardsDiv, ShowMoreButton } from "../WorkshopPage/workshop.page.style";
import PageHeader from "../../components/PageHeader/Header.component";

class Chapter extends Component {
  state = {
    chaptersInfo: [],
    pastChapterItems: 4,
    loading: true,
    buttonText: "See More Chapters",
    expanded: false,
    myRef: React.createRef(),
  };

  fetchData = async () => {
    try {
      let chapters = await fetch("http://143.110.253.103:5000/api/chapters");
      chapters = await chapters.json();
            this.setState(
        {
          chaptersInfo: chapters.chapters,
          stat1: chapters.stat1,
          stat2: chapters.stat2,
          stat3: chapters.stat3,
          loading: false,
        },
        () => {
                  }
      );
    } catch (error) {}
  };

  click = (e) => {
    this.props.history.push(`/chapter/${e.target.dataset.id}`);
  };

  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
      }

  toggleShow = () => {
    if (this.state.expanded === false) {
      this.setState({
        pastChapterItems: this.state.chaptersInfo.length,
        buttonText: "Show Less",
        expanded: true,
      });
    } else {
      this.setState({
        pastChapterItems: 4,
        buttonText: "See More Chapters",
        expanded: false,
      });
      this.state.myRef.current.scrollIntoView();
    }
  };

  render() {
    const { chaptersInfo, loading, buttonText } = this.state;
        return (
      <div>
        <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="white"
        />

        <PageHeader
          img={ChapterHeaderImg}
          title="Chapters"
          subtitle="Locations of TGC around the world! Start a chapter to bring TGC to your city!"
          buttons={[
            {
              text: "START A CHAPTER",
              link: "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform",
            },
          ]}
          imgWidth="70%"
        />

        <Stats
          stats={[
            [this.state.stat1, "NO. OF CHAPTERS"],
            ["1500+", "STUDENTS IMPACTED"],
            [this.state.stat3, "WORKSHOPS"],
          ]}
        />

        <CardBg ref={this.state.myRef}>
          {loading ? (
            <Spinner animation="border" variant="danger" className="mt-5" />
          ) : (
            <CardsDiv className="mt-5 flex-wrap">
              {chaptersInfo
                .slice(0, this.state.pastChapterItems)
                .map((card) => (
                  <Card
                    onClick={this.click}
                    image={card.image}
                    id={card._id}
                    //icons={card.courseIcon}
                    title={card.chapterName}
                    //subtitle={card.dates}
                    //description={card.description}
                    isButton="hi"
                  />
                ))}
            </CardsDiv>
          )}
          {!loading ? (
            <ShowMoreButton onClick={this.toggleShow}>
              {buttonText}
            </ShowMoreButton>
          ) : (
            " "
          )}
        </CardBg>

        <div
          style={{
            backgroundColor: "#FBEDF3",
            padding: "2.5em 0",
            margin: "5vh 0",
          }}
        >
          <HeadingStyle>
            <Heading heading="FIND YOUR CITY" />
          </HeadingStyle>
          <StartChapter />
        </div>

        <DonateBg>
          <Donate />
        </DonateBg>
        <Footer />
      </div>
    );
  }
}

export default Chapter;
