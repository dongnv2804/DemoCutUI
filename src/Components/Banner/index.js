import React from "react";
import "./Banner.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ButtonStyle, TitleBanner, ContentTitle } from "../../style/styled";
const Banner = () => {
  return (
    <Container fluid className="banner">
      <Col md={6} className="content-banner">
        <img src="https://1503641826.rsc.cdn77.org/Media/xsdnwcngpiyjfuxgtbyiyuysu_usermedia.png"></img>
        <TitleBanner>MODULANDS</TitleBanner>
        <ContentTitle>Multi-Purpose Landing Page Template</ContentTitle>
        <Row>
          <Col className="content-right" md={6}>
            <ButtonStyle children="Watch Video"></ButtonStyle>
          </Col>
          <Col className="content-left" md={6}>
            <ButtonStyle
              {...{ id: "btn-banner-right", children: "Buy Template" }}
            ></ButtonStyle>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
export default Banner;
