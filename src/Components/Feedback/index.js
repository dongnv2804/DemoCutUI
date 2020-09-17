import React, { useEffect } from "react";
import "./Feedback.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableProfile from "./DragableProfile";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./feedbackSlice";
const Feedback = () => {
  const listdrags = useSelector((state) => state.feedbacks.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const elements =
    listdrags != undefined
      ? listdrags.map((value, index) => {
          return <DragableProfile key={index} drag={value} />;
        })
      : undefined;
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
        <Row>{elements}</Row>
      </Container>
    </Container>
  );
};
export default Feedback;
