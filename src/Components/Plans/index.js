import React from "react";
import "./Plans.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableShape from "./DragableShape";
import { connect } from "react-redux";

const Plans = ({ listdrags }) => {
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
const mapStateToProps = (state, ownProps) => {
  return {
    listdrags: state.PlansReducer.listdragables,
  };
};
export default connect(mapStateToProps)(Plans);
