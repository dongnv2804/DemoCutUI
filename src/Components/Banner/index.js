import React from "react";
import "./Banner.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const Banner = () => {
  return (
    <Container fluid className="banner">
      <Col md={6} className="content-banner">
        <img src="https://1503641826.rsc.cdn77.org/Media/xsdnwcngpiyjfuxgtbyiyuysu_usermedia.png"></img>
        <h1 className="title-banner">MODULANDS</h1>
        <h2 className="text-banner">Multi-Purpose Landing Page Template</h2>
        <Row>
          <Col className="content-right" md={6}>
            <Button variant="dark" className="btn-banner">
              Watch Video
            </Button>
          </Col>
          <Col className="content-left" md={6}>
            <Button variant="dark" id="btn-banner-right" className="btn-banner">
              Buy Template
            </Button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
export default Banner;
