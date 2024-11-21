import { useEffect, useState } from "react";
import getTrending from "../service/Trendingmovie";
import { MovieTrending } from "../interface/trendingmovie";
import MovieCard from "./movieCard";
const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState<MovieTrending[]>([]);

  const getMoviesItem = async () => {
    const result: MovieTrending[] = await getTrending();
    setTrendingMovie(result);
  };

  useEffect(() => {
    getMoviesItem();
  }, []);

  useEffect(() => {
    console.log(trendingMovie);
  }, [trendingMovie]);

  return (
    <div className="flex flex-col bg-slate-950 ">
      <h1 className="flex py-5  font-bold text-2xl text-white">Trending</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
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
