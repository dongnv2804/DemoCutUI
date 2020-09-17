import React, { useState } from "react";
import "./Plans.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableShape from "./DragableShape";
const listdragables = [
  {
    price: 0,
    headline: "BASIC",
    content: [
      "Lorem ipsum dolor sit",
      "Amet nusce agestas",
      "Maecenas gravida ullacomper",
    ],
    activeshape: false,
    textbutton: "GET FOR FREE",
    colorbutton: "#11cab6",
  },
  {
    price: 49,
    headline: "STANDARD",
    content: [
      "Fusce fabulus lobortis",
      "Egestas fibinus efficur et",
      "Henderit rutrum pretium sit",
    ],
    activeshape: true,
    textbutton: "SIGN UP NOW",
    colorbutton: "#f26347",
  },
  {
    price: 149,
    headline: "ENTERPRISE",
    content: [
      "Fusce fabulus lobortis",
      "Egestas fibinus efficur et",
      "Henderit rutrum pretium sit",
    ],
    activeshape: false,
    textbutton: "SIGN UP NOW",
    colorbutton: "#11cab6",
  },
];
const Plans = () => {
  const [listdrags, setListrags] = useState(listdragables);
  return (
    <Container fluid id="section5" className="flex-section">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="headline1">CHECK OUT OUR PLANS</h2>
            <h2 className="headline2">
              Choose your own pricing plan to meet your requirements{" "}
            </h2>
          </Col>
        </Row>
        <Row className="text-center flex-spacebeetween">
          {listdrags.map((value, index) => {
            return <DragableShape key={index} drag={value} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};
export default Plans;
