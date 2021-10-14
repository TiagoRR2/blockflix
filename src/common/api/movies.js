////axios setup ----- #########################################################
import axios from "axios";
const apiKey = process.env.REACT_APP_TMDB_KEY;

const moviesList = axios.create({
  baseURL: process.env.REACT_APP_MOVIES_BASE_URL,
});

////exported functions ----- ##################################################
export async function getMoviesList() {
  let page = 1;
  const totalURL = `movie/now_playing?api_key=${apiKey}&language=pt-BR&region=BR&page=${page}`;

  const res = await moviesList
    .get(totalURL)
    .catch((e) => console.log("Error: ", e.message));
  let nowPlayingMovies = res.data.results;

  console.log(res);
  // let totalPages = res.data.total_pages
  // page = 2
  // for (page; page <= totalPages; page++) {
  //   let resLoop = await moviesList.get(totalURL).catch(e => console.log('Error: ', e.message));
  //   nowPlayingMovies = nowPlayingMovies.concat(resLoop.data.results)
  // }
  nowPlayingMovies.forEach((movie) => {
    if (movie.vote_average === 0)
      //since we are considering vote_average as the price, this gives some value to movies with vote_average = 0
      movie.vote_average = 1.99;
  });

  return nowPlayingMovies;
}

export const getMovieInfo = async (movieID) => {
  const totalURL = `/movie/${movieID}?api_key=${apiKey}&language=pt-BR`;

  const res = await moviesList
    .get(totalURL)
    .catch((e) => console.log("Error: ", e.message));
  let MovieInfo = res.data;
  if (MovieInfo.vote_average === 0) MovieInfo.vote_average = 1.99;
  //changing vote_average. Same as getMoviesList
  return MovieInfo;
};

export const getCast = async (movieId, numberOfActors = 5) => {
  const totalURL = `movie/${movieId}/credits?api_key=${apiKey}&language=pt-BR`;

  const res = await moviesList
    .get(totalURL)
    .catch((e) => console.log("Error: ", e.message));
  const cast = res.data.cast.slice(0, numberOfActors - 1);

  return cast;
};
