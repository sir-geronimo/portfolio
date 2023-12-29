import { ArrowRightRounded } from '@mui/icons-material'
import { Box, Grid, Stack, Step, StepIndicator, Stepper, Typography } from '@mui/joy'
import { timeline } from './../data/timeline.json'
import dayjs from 'dayjs'

export default function Timeline() {
  return (
    <Stack id="timeline" spacing={2} width="100%" alignItems="center">
      <Typography level="h2">Experience</Typography>

      <Stepper
        orientation="vertical"
        sx={{
          alignSelf: 'start',
          '--Stepper-verticalGap': '2.5rem',
          '--StepIndicator-size': '3rem',
          '--Step-connectorThickness': '3px',
          '--Step-connectorRadius': '1rem',
          '--Step-connectorInset': '0.2rem',
          '--Step-gap': '0.25rem',
        }}
      >
        {timeline.map((job, idx) => (
          <Step
            key={idx}
            indicator={
              <StepIndicator>
                <ArrowRightRounded />
              </StepIndicator>
            }
          >
            <Grid container gap={2}>
              <Grid key="year">
                <Typography>{dayjs(job.started).format('YYYY')}</Typography>
              </Grid>

              <Grid key="info">
                <Box>
                  <Typography>{job.title}</Typography>

                  <Stack spacing={1}>
                    <Typography level="body-sm">
                      <Typography>{job.company}</Typography>
                      <Typography> - </Typography>
                      <Typography>{job.location}</Typography>
                    </Typography>

                    {job.duties.map((duty) => (
                      <Typography>{duty}</Typography>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
