import axios, { AxiosResponse } from "axios";
import { MovieResponse, Movie } from "../interface/movie";
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTk5Njk2My41ODk4MTQyLCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.85j_J7OVmcMS1Psj6ywiNax3Y_hykwRw7krphanXQiY",
  },
};

async function getTrending(): Promise<Movie[]> {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.log("getTrending Api error", error);
    return [];
  }
}

export default getTrending;
