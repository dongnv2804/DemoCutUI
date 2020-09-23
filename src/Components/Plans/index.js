import React, { useEffect } from "react";
import "./Plans.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DragableShape from "./DragableShape";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./plansSlice";
import { HeadlineLg, Headlineunder } from "../../style/styled";
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
            <HeadlineLg>CHECK OUT OUR PLANS</HeadlineLg>
            <Headlineunder>
              {" "}
              Choose your own pricing plan to meet your requirements{" "}
            </Headlineunder>
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
