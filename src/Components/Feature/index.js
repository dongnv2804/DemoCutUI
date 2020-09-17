import React from "react";
import "./Feature.css";
import { Container, Row, Col } from "react-bootstrap";
import Drag3 from "./Drag3";
import { useSelector } from "react-redux";
const Feature = () => {
  const listdrags = useSelector((state) => state.FeatureReducer.listdragables);
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
