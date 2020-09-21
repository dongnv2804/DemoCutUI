import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

const schemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("required!")
    .min(5, "min 5 character")
    .max(50, "max 50 character"),
  email: Yup.string().email("invalid email format").required("Required!"),
  phone: Yup.string()
    .required("Required!")
    .min(9, "min 9 number")
    .max(15, "max 15 character"),
});

const FormSignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: schemaValidation,
    onSubmit: (values) => {
      console.log("ok");
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="row formsignup">
      <Col md={12}>
        <h4 id="text-create">CREATE A FREE ACCOUNT</h4>
      </Col>
      <Form.Group className="col-md-12">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={formik.handleChange}
          placeholder="Enter your name"
        ></Form.Control>
        {formik.errors.name && formik.touched.name && (
          <p className="error">{formik.errors.name}</p>
        )}
      </Form.Group>
      <Form.Group className="col-md-12">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={formik.handleChange}
        ></Form.Control>
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
      </Form.Group>
      <Form.Group className="col-md-12">
        <Form.Label>Phone *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          onChange={formik.handleChange}
        ></Form.Control>
        {formik.errors.phone && formik.touched.phone && (
          <p className="error">{formik.errors.phone}</p>
        )}
      </Form.Group>
      <Col md={12}>
        <Button variant="dark" type="submit" className="btn-create">
          GET STARTED
        </Button>
      </Col>
    </form>
  );
};
export default FormSignUp;
