import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
interface CircularRatingProp {
  voteAverage: number | null;
}

const CircularRating: React.FC<CircularRatingProp> = ({ voteAverage }) => {
  const progression = voteAverage !== null ? (voteAverage / 10) * 100 : 0;
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <CircularProgress
        sx={{
          "--CircularProgress-size": "100px",
          color: "white",
        }}
        determinate
        value={progression}
      >
        {`${voteAverage?.toFixed(1)} /10`}
      </CircularProgress>
    </Box>
  );
};
export default CircularRating;
