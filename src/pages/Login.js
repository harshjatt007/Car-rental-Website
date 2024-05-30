import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import '../styles/auth.css'; // Updated path

const Login = () => {
  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col lg="5" md="8">
          <h2 className="text-center">Login</h2>
          <Form>
            <FormGroup>
              <Input type="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" required />
            </FormGroup>
            <Button color="primary" block>Login</Button>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;