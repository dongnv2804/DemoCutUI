import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ButtonStyle ,FlexCol25} from "../../style/styled";
import "./Explore.css";

const Explore = () => {
  return (
    <Container fluid className="flex-section" id="section4">
      <Container>
        <Row>
          <Col md={8}>
            <div className="video">
              <img
                width="700"
                src="https://i.vimeocdn.com/video/127119331.webp?mw=700&mh=394&q=70"
              ></img>
            </div>
          </Col>
          <Col md={4} className="flexcolumn">
            <div className="dragable-headline flcol-25">
              <h4 id="elm_section4">
                Watch the video and explore our features
              </h4>
            </div>
            <div className="dragable-text flcol-50">
              <p>
                <span>
                  Praesent rutrum tristique nisl ut pretium. Nunc convallis nec
                  mauris eu fermentum. Fusce faucibus leo sit amet nisi
                  venenatis, nec scelerisque ante euismod. Ut justo pharetra
                  sollicitudin dignissim, iaculis vitae nunc. Vestibulum egestas
                  finibus sit lobortis. Donec porttitor nisl eu nisi lobortis.
                </span>
              </p>
            </div>
            <FlexCol25>
            <ButtonStyle background="#11cab6" {...{className:"button-bottom",children:"Buy Template"}}></ButtonStyle>
            </FlexCol25>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Explore;
