import React, { Component } from "react";
import "./Section6.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableProfile from "./DragableProfile";
export default class Section6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdrag: [
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/ekcpwfoeygsvehpfempkcbvyz_usermedia.png",
          name: "Joey Higgins",
          position: "CEO Higgins&Geox ",
          content:
            "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue.",
        },
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/tqqkfyxwtevculhlwopeiswos_usermedia.png",
          name: "Amanda Fox",
          position: "Designer at Amanidax",
          content:
            "Donec a tortor viverra, tempus nibh ut, dapibus nunc. Maecenas interdum vulputate fermentum. Suspendisse id nisi magna. Fusce interdum interdum lacus ut bibendum. In sit amet tempor felis. Sed a urna mattis convallis.",
        },
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/clrsditnfmpakuydorbaptatt_usermedia.png",
          name: "Bill Catmull",
          position: "Designer at ProGlyphs",
          content:
            "Curabitur ac tincidunt ipsum, id vulputate est. Curabitur at sagittis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque ut eleifend dui. Donec enim dui, elementum.",
        },
      ],
    };
  }
  render() {
    return (
      <Container fluid id="section6" className="flex-section">
        <Container>
          <Row className="text-center">
            <Col className="mb2-5">
              <h2 className="headline1">READ OUR TESTIMONIALS</h2>
              <h2 className="headline2">
                We appreciate every kind word from our awesome clients{" "}
              </h2>
            </Col>
          </Row>
          <Row>
            {this.state.listdrag.map((value, index) => {
              return <DragableProfile key={index} drag={value} />;
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}
