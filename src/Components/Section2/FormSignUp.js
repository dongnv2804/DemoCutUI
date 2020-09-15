import React from "react";
import { Form, Button, Col } from "react-bootstrap";
const FormSignUp = () => {
  return (
    <Form className="row formsignup">
      <Col md={12}>
        <h4 id="text-create">CREATE A FREE ACCOUNT</h4>
      </Col>
      <Form.Group className="col-md-12">
        <Form.Label>Name *</Form.Label>
        <Form.Control type="text" placeholder="Enter your name"></Form.Control>
      </Form.Group>
      <Form.Group className="col-md-12">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="col-md-12">
        <Form.Label>Phone *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
        ></Form.Control>
      </Form.Group>
      <Col md={12}>
        <Button variant="dark" className="btn-create">GET STARTED</Button>
      </Col>
    </Form>
  );
};
export default FormSignUp;
