import { Cast } from "../../interface/movieperson";
import { useNavigate } from "react-router-dom";
import film from "../../assets/film-strip.png";

interface MovieCardItem {
  movie: Cast;
}
const MoviePersonCard = ({ movie }: MovieCardItem) => {
  const navigate = useNavigate();
  const handelClickToDetail = () => {
    // Send item object data to /detail  by state
    navigate(`/detail/${movie.id}`, { state: movie });
  };
  return (
    <div className="inline-block pr-6">
      <div
        className="flex items-center w-44 h-64 max-w-xs overflow-hidden rounded-2xl shadow-md hover:scale-105 transition duration-500 cursor-pointer bg-gray-400 "
        onClick={handelClickToDetail}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = film;
          }}
        />
      </div>
    </div>
  );
};

export default MoviePersonCard;
