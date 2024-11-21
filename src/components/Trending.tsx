import { useEffect, useState } from "react";
import getTrending from "../service/Trendingmovie";
import { Movie } from "../interface/popularmovie";
import MovieCard from "./MovieCard";
const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie[]>([]);

  const getMoviesItem = async () => {
    const result: Movie[] = await getTrending();
    setTrendingMovie(result);
  };

  useEffect(() => {
    getMoviesItem();
  }, []);

  // useEffect(() => {
  //   console.log(trendingMovie);
  // }, [trendingMovie]);

  return (
    <div className="flex flex-col bg-slate-950 ">
      <h1 className="flex py-5  font-bold text-2xl text-white">Trending</h1>
      <div className="flex overflow-x-scroll pb-5  ">
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
