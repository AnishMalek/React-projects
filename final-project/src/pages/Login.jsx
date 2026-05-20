import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import { Form, Button, Card, Container } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      const userData = {
        username: username
      };
      dispatch(login(userData));
      navigate('/');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '400px' }} className="shadow-sm">
        <Card.Body>
          <h3 className="text-center mb-4">Sign In</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter any username" 
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter any password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
