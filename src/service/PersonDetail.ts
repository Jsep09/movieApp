import axios, { AxiosResponse } from "axios";
import { CastDetailResponse } from "../interface/CastDetail";
const getPersonDetail = async (
  person_id: number
): Promise<CastDetailResponse> => {
  try {
    const response: AxiosResponse<CastDetailResponse> = await axios.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${person_id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzkzMDJjMzljOWFjYjkzMjEzOWMzMzBiYTgyZDczNyIsIm5iZiI6MTczMTk5Njk2My41ODk4MTQyLCJzdWIiOiI2NzM5YmQxNjQ0MzU0MzE5MWNjYmUxMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.85j_J7OVmcMS1Psj6ywiNax3Y_hykwRw7krphanXQiY",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("getCastDetail error");
  }
};

export default getPersonDetail;
