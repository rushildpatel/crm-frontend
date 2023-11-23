import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" required />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="password" required />
            </Form.Group>
            <br />
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
