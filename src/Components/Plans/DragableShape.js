import React from "react";
import { Col, Card } from "react-bootstrap";
import { ButtonStyle, DragShape, Underline } from "../../style/styled";
const DragableShape = (props) => {
  return (
    <Col md={4}>
      <Card className="drag-card">
        <div className="bodycard">
          <DragShape active={props.drag.activeshape}>
            <div className="head-drag">
              <h5
                className={
                  props.drag.activeshape
                    ? "elmunitprice color-white"
                    : "elmunitprice"
                }
              >
                $
              </h5>
              <h2
                className={
                  props.drag.activeshape ? "elmprice color-white" : "elmprice"
                }
              >
                {props.drag.price}
              </h2>
            </div>
          </DragShape>
          <div className="headlinecardbody">
            <h4 className="text-headline">
              <span>{props.drag.headline}</span>
            </h4>
          </div>
          <Underline />
          <div className="drag-content">
            {props.drag.content.map((value, index) => {
              return (
                <p key={index} className="textbodycard">
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "30px",
                      color: "#8e8386",
                    }}
                  >
                    {value}
                  </span>
                </p>
              );
            })}
          </div>
          <div className="drag-button">
            <ButtonStyle
              background={props.drag.colorbutton}
              border={`0px solid ${props.drag.colorbutton}`}
              {...{ children: props.drag.textbutton }}
            ></ButtonStyle>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DragableShape;
