const api = {
  key: "927a4178cca9e2be8051cce69ee92b6e",
};
export const request = {
  fetchTrending: `/trending/all/week?api_key=${api.key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api.key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api.key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api.key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api.key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api.key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api.key}&with_genres=10749`,
  fetchDocumentaires: `/discover/movie?api_key=${api.key}&with_genres=99`,
};
export default api;
