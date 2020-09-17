import React from "react";
import "./Characteristic.css";
import { Container, Row, Col } from "react-bootstrap";
import CardDragable from "./CardDragable";
import { useSelector } from "react-redux";
const Characteristic = () => {
  const listdrags = useSelector(
    (state) => state.CharacteristicReducer.listdragables
  );
  console.log(listdrags);
  return (
    <Container fluid id="section1">
      <Container className="flex-section1">
        <Row>
          {listdrags
            ? listdrags.map((value, index) => {
                return <CardDragable key={index} dragable={value} />;
              })
            : undefined}
        </Row>
      </Container>
    </Container>
  );
};

export default Characteristic;
