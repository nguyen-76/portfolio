import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";
import JobInfo from "./component/JobInfo.js";
import { CssBaseline, createTheme } from "@mui/material";
import SearchAppBar from "./component/AppBar";
import Home from "./component/Home.js";
import { ThemeProvider } from "@emotion/react";
import LoginForm from "./component/LoginForm.js";

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const state = location.state;

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Home />}>
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {state && auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<JobInfo />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginForm />}></Route>
        </Routes>
      )}
    </>
    </ThemeProvider>
  );
}

export default App;