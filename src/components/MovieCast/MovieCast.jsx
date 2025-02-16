import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from '../../api-query';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getCastMovie(movieId);
        setCast(data.cast);
        setError(null);
      } catch (err) {
        setError('Failed to fetch movie cast. Please try again later.');
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
};

export default MovieCast;