import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTRkZjM4NWJmZWMxNDVkMTlkNGI1MWRkYWE4M2YwNiIsIm5iZiI6MTczNjY5ODAwOS4zMTgsInN1YiI6IjY3ODNlODk5NjAxYWNmZTdiZDRmMjBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jTOGpr9xLFmRIg1qnbbcyL-MbnbUrkj1cN4OQ1CzJgA",
  },
};

export const getMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data;
};

export const getInfMovie = async (movieID) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
    options
  );

  return data;
};

export const getCastMovie = async (movieID) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
    options
  );

  return data;
};

export const getReviewsMovie = async (movieID) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US`,
    options
  );

  return data;
};

export const searchMovieOnKeyWord = async (query) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data;
};