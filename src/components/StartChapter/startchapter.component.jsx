import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { withRouter } from "react-router-dom";

import {
  BoxText,
  Input,
  Button,
  BoxImage,
  Logo,
  SecondaryButton,
  PinkButton,
} from "./startchapter.styles";
import Heading from "../Heading/heading.component";
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/plus.png";
import { Link } from "react-router-dom";
import map from "../../assets/map2.png";

class StartChapter extends Component {
  state = {
    searchItems: [
      "delhi",
      "rajasthan",
      "haryana",
      "telangana",
      "usa",
      "singapore",
      "bihar",
    ],
    search: "",
    linkedItems: this.props.linkedItems,
    found: false,
  };

  fetchData = async () => {};

  handleChange = (e) => {
    const { searchItems } = this.state;
    this.setState({ search: e.target.value });

    if (!searchItems.includes(e.target.value.toLowerCase())) {
      this.setState({ found: false });
    } else {
      this.setState({ found: true });
    }
  };

  navigate = () => {
    if (this.state.found) {
      this.props.history.push(`/indworkshop/${this.state.search}`);
      this.setState({
        search: "",
        found: false,
      });
    } else {
      this.props.history.push(`/joinus`);
      this.setState({
        search: "",
        found: false,
      });
    }
  };

  render() {
    const JoinButton = (text, link) => (
      <Button
        type="button"
        onClick={this.navigate}
        style={
          this.state.found
            ? {
                backgroundColor: "#f05680",
                color: "white",
                fontSize: "1.2rem",
                textAlign: "center",
              }
            : {}
        }
      >
        <Logo
          src={logo}
          alt="Search"
          style={
            ({ width: "1.7rem", margin: "0 0.8rem" },
            this.state.found
              ? {
                  display: "none",
                }
              : {})
          }
        />
        {text}
      </Button>
    );
    const SecondaryJoinButton = (text, link) => (
      <SecondaryButton type="button">
        <Link to={link} />{" "}
        <Logo
          src={logo}
          alt="Search"
          style={{ width: "1.7rem", margin: "0 0.8rem" }}
        />
        {text}
      </SecondaryButton>
    );
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <Heading heading={this.props.heading} />
        <BoxText>
          Search for your city on the map below. If we don’t have a chapter you
          can join in that city, start your own! Help us bridge the gender gap
          in tech one workshop at a time. Start a chapter in your city.
        </BoxText>

        <Link to="/joinus" style={{ textDecoration: "none", display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <PinkButton>Become a Chapter Member</PinkButton>
        </Link>
        {/* <Input
          placeholder="Find Chapters Near You"
          onChange={this.handleChange}
        />
        <br /> */}

        {/* {!this.state.found
          ? JoinButton(
              "Start a Chapter",
              "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform"
            )
          : JoinButton(
              "Join Chapter",
              "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform"
            )}
        <br /> */}
        <BoxImage>
          <Image src={map} fluid />
        </BoxImage>
        {/* {!this.state.found
          ? SecondaryJoinButton(
              "Start a Chapter",
              "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform"
            )
          : SecondaryJoinButton(
              "Join Chapter",
              "https://docs.google.com/forms/d/e/1FAIpQLSd5_ISkWJPslqQQE4l4WyL7of9ThLfVMSX3DP7kH5SLuu3MaA/viewform"
            )} */}
      </div>
    );
  }
}

export default withRouter(StartChapter);
