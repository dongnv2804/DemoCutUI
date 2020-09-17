import React, { useState } from "react";
import "./SignUp.css";
import { Container, Row, Col } from "react-bootstrap";
import Dragable from "./Dragable";
import FormSignUp from "./FormSignUp";

const listdragables = [
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
];
const SignUp = () => {
  const [listdrags, setListdrags] = useState(listdragables);
  return (
    <Container fluid id="section2" className="flex-section">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className="section2-headline">
                <h2 id="text1">GROW YOUR REVENUE</h2>
              </Col>
              <Col md={12} className="section2-headline">
                <h2 id="text2">Maecenas gravida ullacomper nescum seget</h2>
              </Col>
            </Row>
            {listdrags.map((value, index) => {
              return <Dragable key={index} drag={value} />;
            })}
          </Col>
          <Col md={4} className="wrapform">
            <FormSignUp />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default SignUp;
