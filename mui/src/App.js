import React from "react";
import "./App.css";
import "./jobs.json";
import jobs from "./jobs.json"
import { ThemeProvider } from "@emotion/react";
import SearchAppBar from "./component/AppBar";
import { Box, Container, Grid, createTheme } from '@mui/material';
import JobPosting from "./component/JobPosting";
import Pagination from '@mui/material/Pagination';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    tertiary : {
      main: `orange`,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{background:"black"}}>
      <SearchAppBar />
      <Container sx={{ p: 3 }}>
      <Grid style={{marginTop:"1rem",display: "flex"}} container spacing={2}>
        {jobs?.map(job=> (
        <Grid  key={job.id} item xs={12} md={4}>
          <JobPosting job={job}/>
        </Grid>
        ))}
      </Grid>
      <Grid style={{marginTop:"1rem",display:'flex', justifyContent:"center"}} item xs={12} md={12}>
        <Pagination 
          style={{color:"black",width:"100%", justifyContent:"center",display:"flex"}} 
          count={3}  
          color="secondary" />
      </Grid>
      </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
