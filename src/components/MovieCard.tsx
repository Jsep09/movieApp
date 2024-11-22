import { Movie } from "../interface/movie";
import { useNavigate } from "react-router-dom";

interface MovieCardItem {
  item: Movie;
}
const MovieCard = ({ item }: MovieCardItem) => {
  const navigate = useNavigate();
  const handelClickToDetail = () => {
    // Send item object data to /detail  by state
    navigate(`/detail/${item.id}`, { state: item });
  };
  return (
    <div className="inline-block pr-6">
      <div
        className="w-44 h-64 max-w-xs overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-500 cursor-pointer "
        onClick={handelClickToDetail}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
