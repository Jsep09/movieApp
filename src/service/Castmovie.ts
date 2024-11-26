import axios, { AxiosResponse } from "axios";
import { CreditResponse, Cast } from "../interface/Credit";
const getCredit = async (movie_id: number): Promise<Cast[]> => {
  try {
    const response: AxiosResponse<CreditResponse> = await axios.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTk5Njk2My41ODk4MTQyLCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.85j_J7OVmcMS1Psj6ywiNax3Y_hykwRw7krphanXQiY",
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log("getMovieDetail Api error", error);
    return [];
  }
};

export default getCredit;
