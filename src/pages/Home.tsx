import AppBar from "../components/Appbar";
import PopularCarousel from "../components/Home/Popular-Carousel";
import Trending from "../components/Home/Trending";
import Container from "@mui/material/Container";
import MovieList from "../components/Home/MovieList";
const Home = () => {
  return (
    <div className="w-full h-full">
      <AppBar />
      <Container maxWidth="xl">
        <PopularCarousel />
        <Trending />
        <MovieList />
      </Container>
    </div>
  );
};

export default Home;
