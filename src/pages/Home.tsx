import SearchAppBar from "../components/Appbar";
import PopularCarousel from "../components/Popular-Carousel";
import Trending from "../components/Trending";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <div className="bg-slate-950 w-full h-full">
      <SearchAppBar />
      <Container maxWidth="xl">
        <PopularCarousel />
        <Trending />
      </Container>
    </div>
  );
};

export default Home;
