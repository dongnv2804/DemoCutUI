import React from "react";
import { Row, Col } from "react-bootstrap";
const Dragable = (props) => {
  return (
    <Row md={12}>
      <Col md={1}>
        <img src={props.drag.img}></img>
      </Col>
      <Col md={11} className="dragable-text">
        <p>
          <span>{props.drag.text}</span>
        </p>
      </Col>
    </Row>
  );
};
export default Dragable;
