import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainHeader from "./MainHeader";
import React, { useState } from "react";
import MoviePage from "../component/MoviePage";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [idMovie, setIdMovie] = useState("");

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet context={[setIsOpen, setIdMovie]} />
      <Box sx={{ flexGrow: 1 }} />
      <MoviePage isOpen={isOpen} id={idMovie} setOpen={setIsOpen} />
    </Stack>
  );
}

export default MainLayout;