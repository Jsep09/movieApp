import { useLocation } from "react-router-dom";
import AppBar from "../components/Appbar";
import { Movie } from "../interface/movie";

interface LocationState {
  state: Movie;
}
const Detail = () => {
  //useLocation for get data from state
  const location = useLocation();
  //useLocation returns data including state here item.
  const { state: movie } = location as LocationState;
  return (
    <div>
      <AppBar />
      <h1 className="text-white">{movie.title}</h1>
    </div>
  );
};

export default Detail;
