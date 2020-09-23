import React, { useEffect } from "react";
import "./Trademark.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./trademarkSlice";
import { FlexBetween } from "../../style/styled";

const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img} alt=""></img>
    </div>
  );
};
const Trademark = () => {
  const listdrags = useSelector((state) => state.trademarks.listdragables);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Container fluid id="section7">
      <Container>
        <FlexBetween>
          {listdrags.map((value, index) => (
            <Drag key={index} img={value} />
          ))}
        </FlexBetween>
      </Container>
    </Container>
  );
};

export default Trademark;
