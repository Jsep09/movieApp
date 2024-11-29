import { Movie } from "../interface/movie";
import { useNavigate } from "react-router-dom";
import film from "../assets/film-strip.png";

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
        className=" flex items-center w-44 h-64 max-w-xs overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-500 cursor-pointer  bg-gray-400 "
        onClick={handelClickToDetail}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt={item.title}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = film;
          }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
