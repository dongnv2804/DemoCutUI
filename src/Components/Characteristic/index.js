import React from "react";
import "./Characteristic.css";
import { Container, Row, Col } from "react-bootstrap";
import CardDragable from "./CardDragable";
import { connect } from "react-redux";
const Characteristic = ({ lisdrags }) => {
  return (
    <Container fluid id="section1">
      <Container className="flex-section1">
        <Row>
          {lisdrags
            ? lisdrags.map((value, index) => {
                return <CardDragable key={index} dragable={value} />;
              })
            : undefined}
        </Row>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    lisdrags: state.CharacteristicReducer.listdragables,
  };
};

export default connect(mapStateToProps)(Characteristic);
