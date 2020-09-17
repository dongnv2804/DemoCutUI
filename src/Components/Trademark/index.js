import React from "react";
import "./Trademark.css";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img}></img>
    </div>
  );
};
const Trademark = ({ listdrags }) => {
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
const mapStateToProps = (state, ownProps) => {
  return {
    listdrags: state.TrademarkReducer.listdragables,
  };
};
export default connect(mapStateToProps)(Trademark);
