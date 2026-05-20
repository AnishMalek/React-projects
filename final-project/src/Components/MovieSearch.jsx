import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/actions/movieActions';
import { Form, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './moviesearch.css';

const MovieSearch = () => {
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();


    const moviesState = useSelector((state) => state.movies);
    const searchResults = moviesState.searchResults;
    const loading = moviesState.loading;
    const error = moviesState.error;

    const handleSearch = (e) => {
        e.preventDefault();
        if (query !== '') {
            dispatch(searchMovies(query));
        }
    };

    return (
        <div className="mt-4">
            <h2>Search Movies</h2>
            <Form onSubmit={handleSearch} className="d-flex mb-4">
                <Form.Control
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    size="lg"
                />
                <Button variant="primary" type="submit" className="ms-2">
                    Search
                </Button>
            </Form>

            {loading === true ? (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : null}

            {error !== null ? (
                <Alert variant="danger">{error}</Alert>
            ) : null}

            <Row className="g-4 mt-2">
                {searchResults.map((movie) => {
                    return (
                        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="h-100 shadow-sm">
                                {movie.poster_path ? (
                                    <Card.Img
                                        variant="top"
                                        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                                        alt={movie.title}
                                    />
                                ) : (
                                    <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '350px' }}>
                                        No Image
                                    </div>
                                )}
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        Year: {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown'}
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
};

export default MovieSearch;
