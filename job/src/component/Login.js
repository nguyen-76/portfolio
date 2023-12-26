import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};

function Login({ callback }) {
  const [username] = React.useState("realemail@gmail.com");
  const [password] = React.useState("password");

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const auth = React.useContext(AuthContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    console.log("run");
    auth.signin(username);
  };
  React.useEffect(() => {
    if (auth.user) navigate("/");
  }, [auth.user, navigate]);

  return (
    <div>
      <Box sx={style}>
        <LockOpenIcon fontSize="large" />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <TextField
          id="outlined-controlled"
          label="Username"
          default="user"
          value={username}
        />
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            display: "flex",
            flexDirection: "column",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={password}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Button
            onClick={handleLogin}
            sx={{ m: 1, width: "10ch" }}
            variant="contained"
            color="error"
          >
            Login
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
export default Login;