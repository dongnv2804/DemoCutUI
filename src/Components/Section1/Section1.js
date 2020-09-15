import React, { Component } from "react";
import "./Section1.css";
import { Container, Row, Col } from "react-bootstrap";
import CardDragable from "./CardDragable";
export default class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdragables: [
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
          headline: "Maecenas currabitur",
          text:
            "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
        },
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
          headline: "Maecenas currabitur",
          text:
            "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
        },
        {
          img:
            "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
          headline: "Maecenas currabitur",
          text:
            "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
        },
      ],
    };
  }
  render() {
    return (
      <Container fluid id="section1">
        <Container className="flex-section1">
          <Row>
            {this.state.listdragables.map((value, index) => {
              return <CardDragable key={index} dragable={value} />;
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}
