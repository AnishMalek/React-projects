import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
  const authState = useSelector((state) => state.auth);
  const user = authState.user;
  const preferences = authState.preferences;

  return (
    <Container className="mt-5">
      <h2>User Profile</h2>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4>Welcome, {user ? user.username : 'User'}!</h4>
          <p className="text-muted">This is your private dashboard.</p>
        </Card.Body>
      </Card>

      <h3>Your Favorites</h3>
      {preferences.favorites.length === 0 ? (
        <div>
          <p>No favorites added yet.</p>
          <Link to="/">Browse movies</Link>
        </div>
      ) : (
        <Row className="g-4 mt-2">
          {preferences.favorites.map((movie) => {
            return (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} 
                    alt={movie.title} 
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{movie.title}</Card.Title>
                    <Link to={"/movie/" + movie.id} className="mt-auto">
                      <Button variant="outline-primary" className="w-100">View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default Profile;
