import React, { Component } from "react";
import "./Section7.css";
import { Container, Row } from "react-bootstrap";

const Drag = (props) => {
  return (
    <div className="img-icon">
      <img src={props.img}></img>
    </div>
  );
};

export default class Section7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdrag: [
        "https://1503641826.rsc.cdn77.org/Media/wjqtvaucrdmfepwcoozrklurb_usermedia.png",
        "https://1503641826.rsc.cdn77.org/Media/tbvodilxzhycuklvysqlxkbfx_usermedia.png",
        "https://1503641826.rsc.cdn77.org/Media/aeabikpzsbzyoouaheixaueow_usermedia.png",
        "https://1503641826.rsc.cdn77.org/Media/msefdjzqqdekvqwjccilwjevk_usermedia.png",
        "https://1503641826.rsc.cdn77.org/Media/qfthxfzmfwsktosaixlqqlnln_usermedia.png",
      ],
    };
  }
  render() {
    return (
      <Container fluid id="section7">
        <Container>
          <div className="flex-spacebeetween">
            {this.state.listdrag.map((value, index) => {
              return <Drag key={index} img={value} />;
            })}
          </div>
        </Container>
      </Container>
    );
  }
}
