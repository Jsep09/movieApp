import SearchAppBar from "../components/Appbar";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <div className="bg-slate-950 w-full h-full">
      <SearchAppBar />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </div>
  );
};

export default Home;
