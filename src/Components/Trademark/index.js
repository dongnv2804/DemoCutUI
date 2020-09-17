import React, { Component, useState } from "react";
import "./Trademark.css";
import { Container, Row } from "react-bootstrap";

const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img}></img>
    </div>
  );
};

const listdragables = [
  "https://1503641826.rsc.cdn77.org/Media/wjqtvaucrdmfepwcoozrklurb_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/tbvodilxzhycuklvysqlxkbfx_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/aeabikpzsbzyoouaheixaueow_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/msefdjzqqdekvqwjccilwjevk_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/qfthxfzmfwsktosaixlqqlnln_usermedia.png",
];
const Trademark = () => {
  const [listdrags, setListdrags] = useState(listdragables);
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
