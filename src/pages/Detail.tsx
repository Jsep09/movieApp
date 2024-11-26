import { useLocation } from "react-router-dom";
import AppBar from "../components/Appbar";
import { Movie } from "../interface/movie";
import getMovieDetail from "../service/Datailmovie";
import { useEffect, useState } from "react";
import { DetailResponse } from "../interface/movieDetail";
import Container from "@mui/material/Container";
import CircularRating from "../components/Detail/CircularRating";
import CastCard from "../components/Detail/CastCard";
import getCredit from "../service/Castmovie";
import { Cast } from "../interface/Credit";

interface LocationState {
  state: Movie;
}
const Detail = () => {
  const [movieDetail, setMovieDetail] = useState<DetailResponse | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  // useLocation for get data from state
  const location = useLocation();
  // useLocation returns data including state here item.
  const { state: movie } = location as LocationState;

  const getMovie = async () => {
    // รับ movie id มากจาก state เพื่อไปเรียกใช้ api
    const result = await getMovieDetail(movie.id);
    setMovieDetail(result);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const Getcast = async () => {
    const result = await getCredit(movie.id);
    setCast(result);
  };
  useEffect(() => {
    Getcast();
  }, []);
  useEffect(() => {
    console.log("Cast data", cast);
  }, [cast]);

  const runtimeFommat = () => {
    if (movieDetail) {
      const time = movieDetail.runtime;
      const hours = Math.floor(time / 60);
      const minute = time % 60;
      return `${hours}h${minute}m`;
    }
  };
  const voteAverage = movieDetail?.vote_average ?? null; // ถ้า vote_average เป็น undefined หรือ null จะใช้ค่า null แทน

  return (
    <div>
      <AppBar />
      <Container maxWidth="xl">
        {/* desktop view */}
        <div className="hidden md:block relative mt-3 p-10">
          <div className="absolute inset-0 bg-slate-950 opacity-85 w-full md:h-full lg:h-128 xl:h-136 2xl:h-142 z-10"></div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt={movieDetail?.title}
            className="absolute inset-0 w-full md:h-128 lg:h-128 xl:h-136 2xl:h-142 object-cover rounded-md z-0"
          />
          <div className="flex gap-4">
            <div className="flex-1 z-20  max-w-md shadow-white hover:scale-105 transition duration-500 cursor-pointer ">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="flex-1 flex-col z-20 overflow-hidden">
              <h2 className="text-white text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold inline-block">
                {movie.title}
              </h2>
              <span className="text-gray-400 mx-1 ">
                ({movie.release_date.slice(0, 4)})
              </span>
              <p className="text-gray-400">
                {movie.release_date} <>|</> {runtimeFommat()} <span>| </span>
                {movieDetail?.genres.map((value, index, arr) => {
                  return (
                    <span key={index} className="text-gray-400">
                      {value.name}
                      {index !== arr.length - 1 && " | "}
                    </span>
                  );
                })}
              </p>
              <div className="my-4">
                <div className="flex flex-row items-center gap-3">
                  <CircularRating voteAverage={voteAverage} />
                  <p className="text-white">
                    Vote
                    <br />
                    score
                  </p>
                </div>
                <div className="my-4">
                  <h2 className="text-white text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold inline-block mb-2">
                    Overviews
                  </h2>
                  <p className="text-white text-sm  ">{movie.overview}</p>
                </div>
                <div className="flex flex-col  ">
                  <h1 className=" pt-5  font-bold text-2xl text-white">Cast</h1>
                  <div className="flex overflow-x-scroll p-5  ">
                    <div className="flex flex-nowrap ">
                      {cast.map((cast, index) => (
                        <CastCard cast={cast} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="block md:hidden max-h-screen">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-950 opacity-70 z-10"></div>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              className=" rounded-md z-0"
            />
          </div>
          <div className=" flex-col justify-center items-center relative -top-44 z-20 text-white text-3xl font-bold">
            <div className="flex-1 flex justify-center ">
              <div className="max-w-60">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-white text-4xl font-bold inline-block mt-5">
                {movie.title}
              </h2>
              <span className="text-gray-400 mx-1 ">
                ({movie.release_date.slice(0, 4)})
              </span>
              <p className="text-gray-400 text-xs">
                {movie.release_date} <>|</> {runtimeFommat()} <span>| </span>
                {movieDetail?.genres.map((value, index, arr) => {
                  return (
                    <span key={index} className="text-gray-400">
                      {value.name}
                      {index !== arr.length - 1 && " | "}
                    </span>
                  );
                })}
              </p>
              <div className="flex flex-row items-center  justify-center gap-20 mt-5">
                <CircularRating voteAverage={voteAverage} />
                <p className="text-gray-400 text-xs">Vote score</p>
              </div>
              <div className="mt-5">
                <h2 className="text-white text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold inline-block mb-2">
                  Overviews
                </h2>
                <p className="text-gray-400 text-xs">{movie.overview}</p>
              </div>
              <div className="flex flex-col  ">
                <h1 className=" pt-5  font-bold text-xl text-white">Cast</h1>
                <div className="flex overflow-x-scroll p-5  ">
                  <div className="flex flex-nowrap text-sm">
                    {cast.map((cast, index) => (
                      <CastCard cast={cast} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
