import React, {Component} from "react";
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
  HeaderInfo
} from "./chapter.styles";
import { CardsDiv, ShowMoreButton } from "../WorkshopPage/workshop.page.style";



const Header = () => {
  return (
    <HeaderBg>
      <HeaderImg src={ChapterHeaderImg} />
      <HeaderInfo>
        <ChapterHeading>Chapters</ChapterHeading>
        <ShadowButton Text={'CONTACT US'} link='writetothegirlcode@gmail.com'/>
        <ShadowButton Text={'START A CHAPTER'} link='https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform'/>
      </HeaderInfo>
    </HeaderBg>
    
  );
};

class Chapter extends Component {
  state = {
    chaptersInfo: [],
    pastChapterItems: 4,
    loading: true,
    buttonText: "See More Chapters",
    expanded: false,
    myRef: React.createRef(),
  }

  fetchData = async () => {
    try {
        let chapters = await fetch('http://143.110.253.103:5000/chapters')
        chapters = await chapters.json()
       console.log(chapters, 'fetch data')
        this.setState({
          chaptersInfo: chapters.chapters,
          stat1: chapters.stat1,
          stat2: chapters.stat2,
          stat3: chapters.stat3,
          loading: false
        }, () => {
         console.log(this.state, 'hi hello')
        })
       
        
    } catch (error) {
     
    }
  }

  click = (e) => {
   
    this.props.history.push(`/chapter/${e.target.dataset.id}`)
  }

  componentDidMount(){
    this.fetchData()
    window.scrollTo(0,0)
    console.log('component mounted')
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
    const {
      chaptersInfo,
      loading,
      buttonText
    } = this.state
    console.log(this.state, 'render')
    return (
      <div>
      <NavBar
          bgOut="transparent"
          bgIn="#F05680"
          textOut="#F05680"
          textIn="#F05680"
        />
      <HeaderBg>
        <Header />
      </HeaderBg>

      
      <Stats
        stats={[
          [this.state.stat1, "NO. OF CHAPTERS"],
          ['1500+', "STUDENTS IMPACTED"],
          [this.state.stat3, "WORKSHOPS"],
        ]}
      />
      
      <div style={{backgroundColor: "#FBEDF3", padding: '2.5em 0', margin: '5vh 0'}}>
      <HeadingStyle>
        <Heading heading="FIND YOUR CITY" />
      </HeadingStyle>
          <StartChapter />
        </div>
      <HeadingStyle>
        <Heading heading="OUR CHAPTERS" />
      </HeadingStyle>
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
      </CardBg>
      <DonateBg>
        <Donate />
      </DonateBg>
      <Footer />
    </div>
    )
  }
}

export default Chapter;
