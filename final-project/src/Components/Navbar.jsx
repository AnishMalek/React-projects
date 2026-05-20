import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';

function AppNavbar() {
  const authState = useSelector(function(state) {
    return state.auth;
  });
  
  const isAuthenticated = authState.isAuthenticated;
  const user = authState.user;
  
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Movie Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Popular Movies</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated === true ? (
              <div>
                <Navbar.Text className="me-3">
                  Signed in as: {user ? user.username : 'User'}
                </Navbar.Text>
                <Nav.Link as={Link} to="/profile" style={{ display: 'inline-block' }}>Profile</Nav.Link>
                <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-2">
                  Logout
                </Button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;