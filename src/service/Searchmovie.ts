import axios, { AxiosResponse } from "axios";
import { MovieResponse, Movie } from "../interface/movie";
async function getSearch(movie_name: string): Promise<Movie[]> {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${movie_name}&include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTkxNjczOS4xMzc5NzQ3LCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i8EO5leD5k18AatCQ3cEUr1N66-Ht4VsbA0IUhHOALk",
      },
    });

    return response.data.results;
  } catch (error) {
    console.log("getPopular Api error", error);
    return [];
  }
}

export default getSearch;
