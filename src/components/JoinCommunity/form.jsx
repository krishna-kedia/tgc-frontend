import React, { Component } from "react";
import { FormLabel, Input, FormBox } from "./joincommunity.styles";

import { Row, Col, Form } from "react-bootstrap";

class form extends Component {
  state = {
    name: "",
    gender: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //
  };

  handleSubmit = () => {
    const { name, gender, email } = this.state;

    const formData = {
      name,
      gender,
      email,
    };
  };

  render() {
    return (
      <Form style={{ textAlign: "left" }} onSubmit={this.handleSubmit}>
        <Row style={{ padding: "0" }}>
          <Col style={{ padding: "0" }}>
            <FormLabel>Name :</FormLabel>
            <Input
              name="name"
              placeholder="Jane Doe"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row style={{ padding: "0" }}>
          <Col style={{ padding: "0" }}>
            <FormLabel>Gender :</FormLabel>

            <Input name="gender" as="select" onChange={this.handleChange}>
              <option>Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
            </Input>
          </Col>
        </Row>
        <Row style={{ padding: "0" }}>
          <Col style={{ padding: "0" }}>
            <FormLabel>Email :</FormLabel>
            <Input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        {/* <Button type="submit" className="mt-2">
          JOIN
        </Button> */}
      </Form>
    );
  }
}

export default form;
