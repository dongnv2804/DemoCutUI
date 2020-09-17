import React, { useState } from "react";
import "./Characteristic.css";
import { Container, Row, Col } from "react-bootstrap";
import CardDragable from "./CardDragable";
const listdragables = [
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
];
const Characteristic = () => {
  const [lisdrags, setListdrags] = useState(listdragables);
  return (
    <Container fluid id="section1">
      <Container className="flex-section1">
        <Row>
          {lisdrags.map((value, index) => {
            return <CardDragable key={index} dragable={value} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Characteristic;
