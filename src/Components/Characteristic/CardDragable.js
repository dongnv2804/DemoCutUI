import React from "react";
import { Col } from "react-bootstrap";
import { DragableHeadlineh4 } from "../../style/styled";
const CardDragable = (props) => {
  return (
    <Col md={4} className="card-dragable">
      <div className="dragable-igmage">
        <img src={props.dragable.img}></img>
      </div>
      <div className="dragable-headline">
        <DragableHeadlineh4>{props.dragable.headline}</DragableHeadlineh4>
        {/* <h4>{props.dragable.headline}</h4> */}
      </div>
      <div className="dragable-text">
        <p>
          <span>{props.dragable.text}</span>
        </p>
      </div>
    </Col>
  );
};
export default CardDragable;
