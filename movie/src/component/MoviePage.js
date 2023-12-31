import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Chip } from "@mui/material";
import { getDataMovie } from "../app/apiService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 500px)": {
    display: "block",
  },
};

function MovieDetail({ isOpen, setOpen, id }) {
  const [detailMovies, setDetailMovies] = useState(null);
  useEffect(() => {
    if (!id) return;
    getDataMovie(id).then((res) => {
      setDetailMovies(res.data);
    });
  }, [id]);
console.log(detailMovies)
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box key={detailMovies?.id} sx={style}>
          <img
            width={200}
            height={300}
            alt={detailMovies?.title}
            src={`https://image.tmdb.org/t/p/original${detailMovies?.poster_path}`}
          />
          <Box
            sx={{
              ml: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component={"span"} variant="h4">
              {detailMovies?.title}
            </Typography>
            <Typography component={"span"} color="error">
              Release on: {detailMovies?.release_date}
            </Typography>
            <Typography component={"span"}>{detailMovies?.overview}</Typography>
            <Typography component={"span"}>
              {detailMovies?.genres.map((genre, i) => (
                <Chip
                  sx={{ mt: 2 }}
                  key={`${genre}+${i}`}
                  label={genre.name}
                  variant="outlined"
                  color="warning"
                />
              ))}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieDetail;