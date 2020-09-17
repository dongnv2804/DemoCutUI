import React, { useEffect } from "react";
import "./Trademark.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./trademarkSlice";
const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img}></img>
    </div>
  );
};
const Trademark = () => {
  const listdrags = useSelector((state) => state.trademarks.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const elements =
    listdrags != undefined
      ? listdrags.map((value, index) => {
          return <Drag key={index} img={value} />;
        })
      : undefined;
  return (
    <Container fluid id="section7">
      <Container>
        <div className="flex-spacebeetween">{elements}</div>
      </Container>
    </Container>
  );
};

export default Trademark;
