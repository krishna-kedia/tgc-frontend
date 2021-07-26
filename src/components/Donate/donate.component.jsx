import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShadowButton from "../Button/button.component";
import { Background, Alignment, Title, Content } from "./donate.styles";

class Donate extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  toggleShowDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };
  render() {
    return (
      <Container style={{ paddingBottom: "4em" }}>
        <Background>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <Alignment>
                <Image src="https://imgur.com/9UFLhE6.jpg" fluid />
              </Alignment>
            </Col>

            <Col lg={9} md={9} sm={12}>
              <Row>
                <Col>
                  <Row>
                    <Title>HELP SUPPORT THE GIRL CODE</Title>
                  </Row>
                  <Row>
                    <Content>
                      The Girl Code is a non-profit organization and we do not
                      take any fee for our workshops. Please consider donating
                      to the organization and supporting our cause!
                    </Content>
                  </Row>

                  <Row style={{ padding: "0" }}>
                    <Alignment>
                      <ShadowButton
                        Text={"Donate"}
                        width="30vw"
                        onClick={this.toggleShowDetails}
                      />
                    </Alignment>
                  </Row>

                  {this.state.showDetails ? (
                    <Row>
                      <Content style={{ marginTop: "1em" }}>
                        <div style={{ fontWeight: 600 }}> Bank Details</div>
                        <div style={{ marginTop: "0.5em" }}>
                          Beneficiary Name: GIRLCODE HUMANITARIAN FOUNDATION
                        </div>
                        <div style={{ marginTop: "0.25em" }}>
                          Beneficiary Account Number: 920020071693298
                        </div>
                        <div style={{ marginTop: "0.25em" }}>
                          Beneficiary IFSC code: UTIB0003204
                        </div>
                        <div style={{ marginTop: "0.25em" }}>
                          Beneficiary Bank Name: Axis Bank, HAUZ KHAS II DEL DL
                        </div>
                      </Content>
                    </Row>
                  ) : null}
                </Col>
              </Row>
            </Col>
          </Row>
        </Background>
      </Container>
    );
  }
}

export default Donate;
