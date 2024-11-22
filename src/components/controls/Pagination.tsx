import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProp {
  page: number;
  onPageChange: (page: number) => void;
}

const PaginationUI: React.FC<PaginationProp> = ({ page, onPageChange }) => {
  return (
    <div>
      <Stack spacing={2} className="justify-center  ">
        <Pagination
          count={100} // จำนวนหน้าคงที่
          page={page}
          shape="rounded"
          onChange={(_, page) => onPageChange(page)} // _ It means ignore first event argument
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // item color
              borderColor: "white", // outlined color
              fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
              },
              padding: {
                xs: "4px",
                sm: "6px",
              },
              minWidth: {
                xs: "28px",
                sm: "36px",
              },
              height: {
                xs: "28px",
                sm: "36px",
              },
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "white",
              color: "black",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default PaginationUI;
