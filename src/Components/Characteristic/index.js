import React, { useEffect } from "react";
import "./Characteristic.css";
import { Container, Row } from "react-bootstrap";
import CardDragable from "./CardDragable";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./CharacteristicSlice";

const Characteristic = () => {
  const listdrags = useSelector((state) => state.characteristics.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Container fluid id="section1">
      <Container className="flex-section1">
        <Row>
          {listdrags.map((value, index) => (
            <CardDragable key={index} dragable={value} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Characteristic;
