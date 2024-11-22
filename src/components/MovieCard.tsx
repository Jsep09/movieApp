import { Movie } from "../interface/popularmovie";
interface MovieCardItem {
  item: Movie;
}
const MovieCard = ({ item }: MovieCardItem) => {
  return (
    <div className="inline-block pr-6">
      <div className="w-44 h-64 max-w-xs overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-500  ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
