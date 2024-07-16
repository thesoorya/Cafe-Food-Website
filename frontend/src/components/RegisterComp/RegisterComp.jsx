import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const RegisterComp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isEmailRegistered, setIsEmailRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsEmailRegistered(false); // Reset the state when the user changes the email
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://foodstore-backend-xu6z.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful');
        window.alert('Registration successful!');
      } else {
        if (data.error && data.error === 'Email already exists') {
          setIsEmailRegistered(true); // Set the state to true if email is already registered
          console.error('Email already exists');
        } else {
          console.error('Registration failed:', data.error);
        }
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center align-items-center py-5 mx-1 bg-light text-dark rounded shadow-sm">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {isEmailRegistered && <Form.Text className="text-danger">This email is already registered.</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Create password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={isEmailRegistered}>
              Sign up
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Already registered? <Link to="/login">Log in here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterComp;