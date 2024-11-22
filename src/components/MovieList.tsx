import getPopular from "../service/Popularmovie";
import { Movie } from "../interface/popularmovie";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import PaginationUI from "./controls/Pagination";

const MovieList = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [page, setPageNumber] = useState<number>(1);

  const getMovieList = async (page: number) => {
    const result: Movie[] = await getPopular(page);
    setMoviesList(result);
  };

  useEffect(() => {
    getMovieList(1);
  }, []);

  // useEffect(() => {
  //   console.log("movieList ==>", moviesList);
  // }, [moviesList]);

  const handelPageChange = (newPage: number) => {
    setPageNumber(newPage);
    getMovieList(newPage);
  };

  return (
    <div className="flex flex-col bg-slate-950 ">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex flex-row">
          <h1 className="flex pt-5  font-bold text-2xl text-white">
            All movies
          </h1>
        </div>
        <div className="flex overflow-x-scroll p-5">
          <div className="flex flex-nowrap">
            {moviesList.map((movie, index) => (
              <MovieCard key={index} item={movie} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <PaginationUI page={page} onPageChange={handelPageChange} />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row">
          <h1 className="flex py-6 font-bold text-2xl text-white">All Movie</h1>
          <div className="flex items-center justify-center my-5">
            <PaginationUI page={page} onPageChange={handelPageChange} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap pt-6 pb-11">
          {moviesList.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
