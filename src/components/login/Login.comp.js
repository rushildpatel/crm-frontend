import React from "react";
import PropType from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({ handleOnChange, email, pass, handleOnSubmit, formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text -center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter Email" required />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={pass} onChange={handleOnChange} placeholder="password" required />
            </Form.Group>
            <br />
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropType.func.isRequired,
  handleOnSubmit: PropType.func.isRequired,
  formSwitcher: PropType.func.isRequired,
  email: PropType.string.isRequired,
  pass: PropType.string.isRequired,
};
