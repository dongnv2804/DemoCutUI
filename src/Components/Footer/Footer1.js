import React, { Component } from "react";
import "./Footer1.css";
import { Container, Row, Col, Button } from "react-bootstrap";
export default class Footer1 extends Component {
  render() {
    return (
      <Container fluid id="footer1">
        <Container>
          <div className="text-center footer-body">
            <div className="footer-headline">
              <h2>INTERESTED?</h2>
            </div>
            <div className="footer-headline2">
              <h2>Just one click and your success story can start</h2>
            </div>
            <div className="footer-button">
              <Button variant="dark" className="btn-banner">
                SIGN UP NOW
              </Button>
            </div>
            <div className="icon-contact">
              <img src="https://1503641826.rsc.cdn77.org/Media/fhwyjjlbevlmxfscsxewonwws_usermedia.png"></img>
              <img src="https://1503641826.rsc.cdn77.org/Media/rlbyiepdzlreetwrmpyfdbcss_usermedia.png"></img>
              <img src="https://1503641826.rsc.cdn77.org/Media/truahslzgsxkdvqwjytbxndhf_usermedia.png"></img>
            </div>
            <div className="hr-footer"></div>
            <div className="footer-text">
              <p>
                <span>Made with love by @mylanko     © 2015 Themeforest</span>
              </p>
            </div>
          </div>
        </Container>
      </Container>
    );
  }
}
