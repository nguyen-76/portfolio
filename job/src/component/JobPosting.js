import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function JobPosting({ job }) {
  let location = useLocation();

  return (
    <Card
      sx={{
        mt: 2,
        height: 240,
        maxWidth: 350,
      }}
    >
      <CardActionArea
        component={Link}
        to={`/job/${job.id}`}
        state={{ backgroundLocation: location }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={20}>
            {job.title}
          </Typography>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip key={skill} size="small" color="error" label={skill} />
          ))}
          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color="primary"
          size="small"
          component={Link}
          to={`/job/${job.id}`}
          state={{ backgroundLocation: location }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}