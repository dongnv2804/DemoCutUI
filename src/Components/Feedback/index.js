import React from "react";
import "./Feedback.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableProfile from "./DragableProfile";
import { connect } from "react-redux";

const Feedback = ({ listdrags }) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    listdrags: state.FeedbackReducer.listdragables,
  };
};
export default connect(mapStateToProps)(Feedback);
