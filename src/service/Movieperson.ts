import axios, { AxiosResponse } from "axios";
import { MoviePersonResponse, Cast } from "../interface/movieperson";
const getMoviePerson = async (person_id: number): Promise<Cast[]> => {
  try {
    const response: AxiosResponse<MoviePersonResponse> = await axios.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${person_id}/movie_credits?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTk5Njk2My41ODk4MTQyLCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.85j_J7OVmcMS1Psj6ywiNax3Y_hykwRw7krphanXQiY",
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log("getCredit Api error", error);
    return [];
  }
};

export default getMoviePerson;
