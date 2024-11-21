import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import getPopular from "../service/Popularmovie";
import { Movie } from "../interface/popularmovie";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PopularCarousel = () => {
  const [movie, setMovies] = useState<Movie[]>([]);

  const getMoviesItem = async () => {
    const result: Movie[] = await getPopular();
    setMovies(result.slice(0, 7));
  };

  useEffect(() => {
    getMoviesItem();
  }, []);

  return (
    <Carousel
      indicators={false}
      animation={"slide"}
      duration={3000}
      interval={5000}
      stopAutoPlayOnHover={true}
      indicatorIconButtonProps={{
        style: {
          margin: "5px",
          padding: "1px", // 1
        },
      }}
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
      className="relative  sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 bg-slate-950 mt-3 "
      sx={{ borderRadius: "16px" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
        alt={item.title}
        className="w-full sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 object-cover rounded-md"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 via-transparent to-transparent p-5 rounded-md w-full ">
        <h2 className="text-white text-2xl font-bold">{item.title}</h2>
        <div className="hidden lg:block">
          <p className="text-white text-sm ">{item.overview}</p>
        </div>
        <Stack direction="row" className="mt-2">
          <Button variant="outlined">Explore</Button>
        </Stack>
      </div>
    </Paper>
  );
};

export default PopularCarousel;
