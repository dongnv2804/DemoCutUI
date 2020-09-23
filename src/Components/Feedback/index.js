import React, { useEffect } from "react";
import "./Feedback.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableProfile from "./DragableProfile";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./feedbackSlice";
import { HeadlineLg, Headlineunder } from "../../style/styled";
const Feedback = () => {
  const listdrags = useSelector((state) => state.feedbacks.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Container fluid id="section6" className="flex-section">
      <Container>
        <Row className="text-center">
          <Col className="mb2-5">
            <HeadlineLg>READ OUR TESTIMONIALS</HeadlineLg>
            <Headlineunder>We appreciate every kind word from our awesome clients{" "}</Headlineunder>
          </Col>
        </Row>
        <Row>
          {listdrags.map((value, index) => (
            <DragableProfile key={index} drag={value} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};
export default Feedback;
