import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class Section4 extends Component {
  render() {
    return (
      <Container fluid className="flex-section">
        <Container>
          <Row>
            <Col md={8}></Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
