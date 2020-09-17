import React, { useState } from "react";
import "./Feature.css";
import { Container, Row, Col } from "react-bootstrap";
import Drag3 from "./Drag3";

const listdragables = [
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/ojnosyxkhwnghpxtnynnoazvm_usermedia.png",
    headline: "Desktop & Mobile",
    text:
      "Suspendisse vel lacinia orci, ut commodo enim. Vestibulum at ultrices sapien.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/gsvnznksckjwumbbulpqcgzer_usermedia.png",
    headline: "ProGlyphs Icon Set",
    text:
      "Nulla ultrices eros auctor enim sollicitudin, a rutrum quam mollis. Nulla at odio lectus.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/dbeeuznkrocqxwlwyfpzypmsp_usermedia.png",
    headline: "Easy to Use",
    text:
      "Donec semper odio non efficitur congue. Aenean augue ligula, molestie id est in.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/xxmzvasqwvlfnhkwmdxzkwodu_usermedia.png",
    headline: "Drag & Drop",
    text:
      "Proin cursus arcu mauris, et pulvinar lectus fermentum sed. Donec imperdiet est.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/dajesoolpwbalvojzbbaqlxec_usermedia.png",
    headline: "Statistics",
    text:
      "Phasellus varius blandit felis nec porttitor. Donec sit amet ante sit amet sapien.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/mmpteajifsaimdgxuxljwaijp_usermedia.png",
    headline: "Save Money",
    text:
      "Curabitur at sagittis. Vestibulum ante ipsum primis in faucibus luctus ultrices posuere cubilia.",
  },
];
const Feature = () => {
  const [listdrags, setListdrags] = useState(listdragables);
  return (
    <Container fluid className="flex-section" id="section3">
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h2 className="headline1">AWESOME FEATURES</h2>
            <h2 className="headline2">
              What will you get with our template and Pagewiz{" "}
            </h2>
          </Col>
        </Row>
        <Row>
          {listdrags.map((value, index) => {
            return <Drag3 key={index} drag={value} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};
export default Feature;
