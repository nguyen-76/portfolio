import { Card, CardContent, Typography, Chip, Button} from '@mui/material';
import React from 'react';

function JobPosting({job}) {
  return (
<Card sx={{ mt: 2, maxheight: 340, maxWidth: 340,
      }}
>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize={20}>
          {job.title}
        </Typography>
        {job.skills.slice(0, 4).map((skill) => (
            <Chip key={skill} size="small" color="error" label={skill} />
          ))}
        <Typography variant="body2" color="text.secondary">
          Salary Range: ${job.salaryLow} - ${job.salaryHigh} <br/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Job Description: {job.description}
        </Typography>
      </CardContent>
      <Button style={{width:"100%"}} size="small" variant="contained" color="tertiary">Learn More</Button>
</Card>
  )
}

export default JobPosting