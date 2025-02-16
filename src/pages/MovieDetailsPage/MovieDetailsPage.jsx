import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getInfMovie } from '../../api-query';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getInfMovie(movieId);
        setMovie(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch movie details. Please try again later.');
      }
    };

    fetchMovieDetails();
    
    return () => {};
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />
      )}
      <p>{movie.overview}</p>

      
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
