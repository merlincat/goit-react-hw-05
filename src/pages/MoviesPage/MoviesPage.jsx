import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { fetchSearchMovies } from '../../filmsApi';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getMoviesbySearchQuery() {
      try {
        setIsLoading(true);
        setError(false);
        const dataResp = await fetchSearchMovies(searchQuery);
        if (dataResp.length === 0) {
          setError('No movies found per your request');
        }
        setMovies(dataResp);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesbySearchQuery();
  }, [searchQuery]);

  const handleSearch = newQuery => {
    if (newQuery.trim() === '') {
      setError('The query is empty, please input search request');
      return;
    }
    setMovies([]);
    setSearchQuery(newQuery);
  };

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          handleSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field name="query" placeholder="Search movies" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {!isLoading && !error && movies.length > 0 && (
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              ))}
            </ul>
          )}
          {isLoading && <div>Loading...</div>}
        </>
      )}
    </div>
  );
};

export default MoviesPage;
