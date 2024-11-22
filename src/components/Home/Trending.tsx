import { useEffect, useState } from "react";
import getTrending from "../../service/Trendingmovie";
import { Movie } from "../../interface/movie";
import MovieCard from "../MovieCard";
const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie[]>([]);

  const getMoviesItem = async () => {
    const result: Movie[] = await getTrending();
    setTrendingMovie(result);
  };

  useEffect(() => {
    getMoviesItem();
  }, []);

  return (
    <div className="flex flex-col bg-slate-950 ">
      <h1 className="flex pt-5  font-bold text-2xl text-white">Trending</h1>
      <div className="flex overflow-x-scroll  p-5">
        <div className="flex flex-nowrap">
          {trendingMovie.map((movie, index) => {
            return <MovieCard key={index} item={movie}></MovieCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
