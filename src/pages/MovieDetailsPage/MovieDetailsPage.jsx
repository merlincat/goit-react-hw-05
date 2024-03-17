import { useEffect, useState } from 'react';
import { Outlet, useParams, Link, NavLink } from 'react-router-dom';
import { getMovieById } from '../../filmsApi';

const MovieDetailsPage = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div>
      <Link to="/">Go Home Page</Link>
      {isLoading && <b>Loading movie...</b>}
      {error && <b>HTTP error!</b>}
      {movie && (
        <div>
          <img src={`${imagePath}${movie.backdrop_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>User Score : {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
