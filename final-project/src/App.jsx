import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './redux/store';

import AppNavbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import MovieSearch from './Components/MovieSearch';
import MovieDetails from './Components/MovieDetails';
import PrivateRoute from './Components/PrivateRoute';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;