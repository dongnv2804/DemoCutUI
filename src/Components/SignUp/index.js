import React from "react";
import "./SignUp.css";
import { Container, Row, Col } from "react-bootstrap";
import Dragable from "./Dragable";
import FormSignUp from "./FormSignUp";
import { connect } from "react-redux";

const SignUp = ({ listdrags }) => {
  return (
    <Container fluid id="section2" className="flex-section">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className="section2-headline">
                <h2 id="text1">GROW YOUR REVENUE</h2>
              </Col>
              <Col md={12} className="section2-headline">
                <h2 id="text2">Maecenas gravida ullacomper nescum seget</h2>
              </Col>
            </Row>
            {listdrags.map((value, index) => {
              return <Dragable key={index} drag={value} />;
            })}
          </Col>
          <Col md={4} className="wrapform">
            <FormSignUp />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    listdrags: state.SignupReducer.listdragables,
  };
};
export default connect(mapStateToProps)(SignUp);
