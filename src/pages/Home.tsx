import SearchAppBar from "../components/Appbar";
import PopularCarousel from "../components/Popular-Carousel";
import Trending from "../components/Trending";
import Container from "@mui/material/Container";
import MovieList from "../components/MovieList";
const Home = () => {
  return (
    <div className=" w-full h-full">
      <SearchAppBar />
      <Container maxWidth="xl">
        <PopularCarousel />
        <Trending />
        <MovieList />
      </Container>
    </div>
  );
};

export default Home;
