import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions/movieActions';
import { Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movielist.css';

function MovieList() {
  const dispatch = useDispatch();
  
  const moviesState = useSelector(function(state) { 
    return state.movies; 
  });
  
  const popular = moviesState.popular;
  const loading = moviesState.loading;
  const error = moviesState.error;

  useEffect(function() {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error !== null) {
    return (
      <Alert variant="danger" className="mt-3">
        {error}
      </Alert>
    );
  }

  return (
    <div className="mt-4">
      <h2>Popular Movies</h2>
      <Row className="g-4 mt-2">
        {popular.map(function(movie) {
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
                  <Card.Text className="text-muted">
                    Rating: {movie.vote_average}
                  </Card.Text>
                  
                  <Link to={"/movie/" + movie.id} className="mt-auto">
                    <Button variant="primary" className="w-100">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MovieList;
