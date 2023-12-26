import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Chip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import jobs from "../data/jobs.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobInfo() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );
  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip key={skill} size="small" color="error" label={skill} />
          ))}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.description}
          </Typography>
          <Typography variant="h6" component="div">
            City: {job.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}