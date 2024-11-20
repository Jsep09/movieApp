import axios, { AxiosResponse } from "axios";
import { PopularMovieResponse, Movie } from "../interface/popularmovie";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTkxNjczOS4xMzc5NzQ3LCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i8EO5leD5k18AatCQ3cEUr1N66-Ht4VsbA0IUhHOALk",
  },
};

async function getPopular(): Promise<Movie[]> {
  try {
    const response: AxiosResponse<PopularMovieResponse> = await axios.request(
      options
    );

    return response.data.results;
  } catch (error) {
    console.log("getPopular Api error", error);
    return [];
  }
}

export default getPopular;
