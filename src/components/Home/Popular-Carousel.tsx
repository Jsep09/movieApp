import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import getPopular from "../../service/Popularmovie";
import { Movie } from "../../interface/movie";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PopularCarousel = () => {
  const [movie, setMovies] = useState<Movie[]>([]);

  const getMoviesItem = async (page: number) => {
    const result: Movie[] = await getPopular(page);
    setMovies(result.slice(0, 7));
  };

  useEffect(() => {
    getMoviesItem(1);
  }, []);

  return (
    <Carousel
      indicators={false}
      animation={"slide"}
      duration={900}
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
  const navigate = useNavigate();
  const handelClickToDetail = () => {
    navigate(`/detail/${item.id}`, { state: item });
  };
  return (
    <Paper
      className="relative  sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 bg-slate-950 mt-3 "
      sx={{ borderRadius: "16px" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.title}
        className="w-full sm:h-16 md:h-2/4 lg:h-110 xl:h-128 2xl:h-128 object-cover rounded-md"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 via-transparent to-transparent p-5 rounded-md w-full ">
        <h2 className="text-white text-2xl md:text-6xl lg:text-6xl 2xl:text-7xl font-bold">
          {item.title}
        </h2>
        <div className="hidden lg:block">
          <p className="text-white text-sm mt-3 mb-3">{item.overview}</p>
        </div>
        <Stack direction="row" className="mt-3 mb-3">
          <Button variant="outlined" onClick={handelClickToDetail}>
            Explore
          </Button>
        </Stack>
      </div>
    </Paper>
  );
};

export default PopularCarousel;
