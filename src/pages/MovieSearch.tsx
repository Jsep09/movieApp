import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import getSearch from "../service/Searchmovie";
import { Movie } from "../interface/movie";
import Container from "@mui/material/Container";
import MovieCard from "../components/MovieCard";

const MovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { query } = useParams<{ query: string }>();
  console.log(query);
  const getMovieSearch = async () => {
    if (query) {
      const result: Movie[] = await getSearch(query);
      console.log(result);
      setMovies(result);
    }
  };

  useEffect(() => {
    getMovieSearch();
  }, [query]);

  return (
    <div>
      <Appbar />
      <Container maxWidth="xl">
        <div className="flex flex-row justify-between">
          <h1 className="flex py-6 font-bold text-2xl text-white">
            {`${query?.toUpperCase()}`}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap pt-6 pb-11">
          {movies.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MovieSearch;
