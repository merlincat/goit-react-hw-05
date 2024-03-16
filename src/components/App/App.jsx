import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import css from './App.module.css';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

const App = () => {
  // const { genreId, authorName } = useParams();
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

// 0015d55fbf52ddbb380bf794d1d9f16d

// токен
// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiIwMDE1ZDU1ZmJmNTJkZGJiMzgwYmY3OTRkMWQ5ZjE2ZCIsInN1YiI6IjY1ZjVkYmFhZDRkNTA5MDE2NGFiNGJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .JLcjF8iHOjbCLIG4N99UwwNYG - BrarS14qIyT4eAAw8;

// https://image.tmdb.org/t/p/w500/...

// import { BrowserRouter } from 'react-router-dom';
