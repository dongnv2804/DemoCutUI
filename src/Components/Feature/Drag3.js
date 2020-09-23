import React from "react";
import { Col } from "react-bootstrap";
import { DragBody } from "../../style/styled";
const Drag3 = (props) => {
  return (
    <Col md={4} className="dragable">
      <div className="drag-image">
        <img src={props.drag.img}></img>
      </div>
      <DragBody>
        <div className="dragable-headline">
          <h4>{props.drag.headline}</h4>
        </div>
        <div className="dragable-text">
          <p>
            <span>{props.drag.text}</span>
          </p>
        </div>
      </DragBody>
    </Col>
  );
};
export default Drag3;
