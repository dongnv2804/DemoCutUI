import React from "react";
import "./Feedback.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableProfile from "./DragableProfile";
import { useSelector } from "react-redux";

const Feedback = () => {
  const listdrags = useSelector((state) => state.FeedbackReducer.listdragables);
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
          {listdrags.map((value, index) => {
            return <DragableProfile key={index} drag={value} />;
          })}
        </Row>
      </Container>
    </Container>
  );
};
export default Feedback;
