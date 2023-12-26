import { Box, Modal } from "@mui/material";
import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
};

function LoginForm() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login callback={() => {}} />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginForm;