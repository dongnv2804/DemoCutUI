import React, { useEffect } from "react";
import "./Plans.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableShape from "./DragableShape";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./plansSlice";
const Plans = () => {
  const listdrags = useSelector((state) => state.plans.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
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
          {listdrags.map((value, index) => (
            <DragableShape key={index} drag={value} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Plans;
