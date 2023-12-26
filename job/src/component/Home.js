import { Container, Grid, Pagination, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import api from "../data/fetchData";
import JobPosting from "./JobPosting";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const fetch = async () => {
      const data = await api.getJobs(page, q);
      setJobs(data.jobs);
      setPagesTotal(data.pagesTotal);
    };
    fetch();
  }, [page, q]);
  return (
    <Container sx={{ p: 3 }}>
      {jobs.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {jobs.map((job) => (
              <Grid key={job.id} item xs={12} lg={4}>
                <JobPosting job={job} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={pagesTotal}
            variant="outlined"
            color="secondary"
            sx={{
              mt: 5,
              justifyContent: "center",
              display: "flex",
              alignItems: "end",
            }}
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </>
      ) : (
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          No Result
        </Typography>
      )}
      <Outlet />
    </Container>
  );
}

export default Home;