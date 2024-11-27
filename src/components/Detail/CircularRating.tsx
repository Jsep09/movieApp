import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

interface CircularRatingProp {
  voteAverage: number | null;
}

const CircularRating: React.FC<CircularRatingProp> = ({ voteAverage }) => {
  const progression = voteAverage ? (voteAverage / 10) * 100 : 0;

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
          "--CircularProgress-size": "80px",
          color: "white",
          "--CircularProgress-progressThickness": "7px",
        }}
        determinate
        value={progression}
      >
        {voteAverage ? `${voteAverage?.toFixed(1)} /10` : "0/10"}
      </CircularProgress>
    </Box>
  );
};
export default CircularRating;
