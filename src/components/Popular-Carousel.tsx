import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import getPopular from "../service/Popularmovie";
import { Movie } from "../interface/popularmovie";

const PopularCarousel = () => {
  const [movie, setMovies] = useState<Movie[]>([]);

  const getMoviesItem = async () => {
    const result: Movie[] = await getPopular();
    setMovies(result.slice(0, 5));
  };

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  useEffect(() => {
    getMoviesItem();
  }, []);

  return (
    <Carousel
      indicators={false}
      animation={"fade"}
      duration={600}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {movie.map((movie, index) => (
        <CarouselItem key={index} item={movie} />
      ))}
    </Carousel>
  );
};
interface CarouselItemProps {
  item: Movie;
}
const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <Paper
      className="sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 bg-slate-950 "
      sx={{ borderRadius: "16px" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
        alt={item.title}
        className="w-full sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 object-cover rounded-md"
      />

      <h2 className="text-white">{item.title}</h2>
      <p className="text-white">{item.overview}</p>
    </Paper>
  );
};

export default PopularCarousel;
