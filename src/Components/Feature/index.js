import React, { useEffect } from "react";
import "./Feature.css";
import { Container, Row, Col } from "react-bootstrap";
import Drag3 from "./Drag3";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./featureSlice";
const Feature = () => {
  const listdrags = useSelector((state) => state.features.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const elements =
    listdrags != undefined
      ? listdrags.map((value, index) => {
          return <Drag3 key={index} drag={value} />;
        })
      : undefined;
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
        <Row>{elements}</Row>
      </Container>
    </Container>
  );
};

export default Feature;
