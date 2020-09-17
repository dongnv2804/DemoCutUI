import React from "react";
import { Col } from "react-bootstrap";
const Drag3 = (props) => {
  return (
    <Col md={4} className="dragable">
      <div className="drag-image">
        <img src={props.drag.img}></img>
      </div>
      <div className="drag-body">
        <div className="dragable-headline">
          <h4>{props.drag.headline}</h4>
        </div>
        <div className="dragable-text">
          <p>
            <span>{props.drag.text}</span>
          </p>
        </div>
      </div>
    </Col>
  );
};
export default Drag3;
