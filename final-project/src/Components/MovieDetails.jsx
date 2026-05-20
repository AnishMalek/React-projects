import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../redux/actions/movieActions';
import { addFavorite } from '../redux/actions/authActions';
import { Row, Col, Image, Badge, Button, Spinner, Alert } from 'react-bootstrap';
import './MovieDetails.css';

function MovieDetails() {
  const params = useParams();
  const id = params.id;
  
  const dispatch = useDispatch();
  
  const moviesState = useSelector(function(state) { return state.movies; });
  const movieDetails = moviesState.movieDetails;
  const loading = moviesState.loading;
  const error = moviesState.error;
  
  const authState = useSelector(function(state) { return state.auth; });
  const isAuthenticated = authState.isAuthenticated;
  const preferences = authState.preferences;

  useEffect(function() {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  function handleAddFavorite() {
    if (movieDetails) {
      dispatch(addFavorite(movieDetails));
    }
  }

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
  
  if (!movieDetails) {
    return null;
  }

  const isFavorite = preferences.favorites.some(function(fav) {
    return fav.id === movieDetails.id;
  });

  return (
    <div className="mt-4">
      <Link to="/" className="btn btn-outline-secondary mb-4">&larr; Back</Link>
      <Row>
        <Col md={4} className="mb-4">
          <Image 
            src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} 
            alt={movieDetails.title} 
            fluid 
            rounded 
            className="shadow-lg" 
          />
        </Col>
        <Col md={8}>
          <h2>
            {movieDetails.title} 
            <span className="text-muted">
              ({movieDetails.release_date ? movieDetails.release_date.split('-')[0] : ''})
            </span>
          </h2>
          <div className="mb-3">
            {movieDetails.genres ? movieDetails.genres.map(function(genre) {
              return (
                <Badge bg="info" className="me-2" key={genre.id}>
                  {genre.name}
                </Badge>
              );
            }) : null}
          </div>
          <p className="lead">{movieDetails.tagline}</p>
          <h5>Overview</h5>
          <p>{movieDetails.overview}</p>
          
          <div className="mt-4">
            <h5>Cast</h5>
            <div className="d-flex flex-wrap gap-2">
              {movieDetails.credits && movieDetails.credits.cast ? movieDetails.credits.cast.slice(0, 5).map(function(member) {
                return (
                  <Badge bg="secondary" key={member.id} className="p-2">
                    {member.name}
                  </Badge>
                );
              }) : null}
            </div>
          </div>

          <div className="mt-4">
            {isAuthenticated === true ? (
              <Button 
                variant={isFavorite ? "success" : "primary"} 
                onClick={handleAddFavorite}
                disabled={isFavorite}
              >
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
              </Button>
            ) : (
              <Alert variant="warning" className="d-inline-block">
                <Link to="/login">Sign in</Link> to save to favorites
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
