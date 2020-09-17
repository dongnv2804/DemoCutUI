import React from "react";
import "./Trademark.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img}></img>
    </div>
  );
};
const Trademark = () => {
  const listdrags = useSelector(
    (state) => state.TrademarkReducer.listdragables
  );
  return (
    <Container fluid id="section7">
      <Container>
        <div className="flex-spacebeetween">
          {listdrags.map((value, index) => {
            return <Drag key={index} img={value} />;
          })}
        </div>
      </Container>
    </Container>
  );
};

export default Trademark;
