import { useLocation } from "react-router-dom";
import AppBar from "../components/Appbar";
import { Movie } from "../interface/movie";
import getMovieDetail from "../service/Datailmovie";
import { useEffect, useState } from "react";
import { DetailResponse } from "../interface/movieDetail";
interface LocationState {
  state: Movie;
}
const Detail = () => {
  const [movieDetail, setMovieDetail] = useState<DetailResponse | null>();

  //useLocation for get data from state
  const location = useLocation();
  //useLocation returns data including state here item.
  const { state: movie } = location as LocationState;

  const getMovie = async () => {
    const result = await getMovieDetail(movie.id);
    setMovieDetail(result);
  };
  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    console.log("movieDetail==>", movieDetail);
  }, [movieDetail]);
  return (
    <div>
      <AppBar />
      <h1 className="text-white">
        {movie.title}
        {movie.id}
      </h1>
    </div>
  );
};

export default Detail;
