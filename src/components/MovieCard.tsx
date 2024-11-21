import { MovieTrending } from "../interface/trendingmovie";
interface MovieCardItem {
  item: MovieTrending;
}
const MovieCard = ({ item }: MovieCardItem) => {
  return (
    <div className="inline-block pr-6">
      <div className="w-44 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
