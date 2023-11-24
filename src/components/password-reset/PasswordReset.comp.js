import React from "react";
import PropType from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({ handleOnChange, email, handleOnResetSubmit, formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text -center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter Email" required />
            </Form.Group>
            <br />
            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropType.func.isRequired,
  handleOnResetSubmit: PropType.func.isRequired,
  formSwitcher: PropType.func.isRequired,
  email: PropType.string.isRequired,
};
