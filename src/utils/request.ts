const API_Key = process.env.NEXT_PUBLIC_API_Key;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchMoviePosters: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_Key}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
