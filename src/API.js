import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM';
axios.defaults.params = {
  language: 'en-US',
};

export const fechServisMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fechServisSearchMovie = async searchValue => {
  const response = await axios.get(`/search/movie?query=${searchValue}`);
  return response.data;
};

export const fechServisMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fechServisMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const fechServisMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};
