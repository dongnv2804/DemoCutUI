import React, { useEffect } from "react";
import "./Feature.css";
import { Container, Row, Col } from "react-bootstrap";
import Drag3 from "./Drag3";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./featureSlice";
import { HeadlineLg, Headlineunder } from "../../style/styled";
const Feature = () => {
  const listdrags = useSelector((state) => state.features.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Container fluid className="flex-section" id="section3">
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <HeadlineLg>AWESOME FEATURES</HeadlineLg>
            <Headlineunder>What will you get with our template and Pagewiz{" "}</Headlineunder>
          </Col>
        </Row>
        <Row>
          {listdrags.map((value, index) => (
            <Drag3 key={index} drag={value} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Feature;
