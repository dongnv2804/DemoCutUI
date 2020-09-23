import React, { Component } from "react";
import "./Footer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BodyFooter,
  ButtonStyle,
  ContentFooter,
  Footer2,
  HeadlineFooterBottom,
  HeadlineFooterTop,
  UnderlineFooter,
} from "../../style/styled";
const Footer = () => {
  return (
    <>
      <Container fluid id="footer1">
        <Container>
          <BodyFooter>
            <HeadlineFooterTop>
              <h2>INTERESTED?</h2>
            </HeadlineFooterTop>
            <HeadlineFooterBottom>
              <h2>Just one click and your success story can start</h2>
            </HeadlineFooterBottom>
            <div className="footer-button">
              <ButtonStyle {...{ children: "SIGN UP NOW" }}></ButtonStyle>
            </div>
            <div className="icon-contact">
              <img src="https://1503641826.rsc.cdn77.org/Media/fhwyjjlbevlmxfscsxewonwws_usermedia.png"></img>
              <img src="https://1503641826.rsc.cdn77.org/Media/rlbyiepdzlreetwrmpyfdbcss_usermedia.png"></img>
              <img src="https://1503641826.rsc.cdn77.org/Media/truahslzgsxkdvqwjytbxndhf_usermedia.png"></img>
            </div>
            <UnderlineFooter />
            <ContentFooter>
              <p>
                <span>Made with love by @mylanko © 2015 Themeforest</span>
              </p>
            </ContentFooter>
          </BodyFooter>
        </Container>
      </Container>
      <Footer2>
        <a>Created by Pagewiz - The Landing Page Platform</a>
      </Footer2>
    </>
  );
};
export default Footer;
