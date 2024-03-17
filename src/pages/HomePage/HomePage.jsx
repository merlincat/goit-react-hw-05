import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../filmsApi';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const dataResp = await fetchTrendingMovies();
        setTrendingFilms(dataResp);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {isLoading && <b>Loading payments...</b>}
        {error && <b>HTTP error!</b>}
        {trendingFilms.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
