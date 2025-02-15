import axios from "axios";


const API_KEY = "5e4df385bfec145d19d4b51ddaa83f06"; 
const BASE_URL = "https://api.themoviedb.org/3";  

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getMovies = async () => {
  try {
    
    const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw new Error("Failed to fetch trending movies.");
  }
};

export const getInfMovie = async (movieID) => {
  try {
 
    const response = await axios.get(`${BASE_URL}/movie/${movieID}?language=en-US&api_key=${API_KEY}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details.");
  }
};

export const getCastMovie = async (movieID) => {
  try {
   
    const response = await axios.get(`${BASE_URL}/movie/${movieID}/credits?language=en-US&api_key=${API_KEY}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw new Error("Failed to fetch movie cast.");
  }
};

export const getReviewsMovie = async (movieID) => {
  try {
    
    const response = await axios.get(`${BASE_URL}/movie/${movieID}/reviews?language=en-US&api_key=${API_KEY}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw new Error("Failed to fetch movie reviews.");
  }
};

export const searchMovieOnKeyWord = async (query) => {
  try {
   
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw new Error("Failed to search movies.");
  }
};
