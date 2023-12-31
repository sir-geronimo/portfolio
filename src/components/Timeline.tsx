import { CircleRounded } from '@mui/icons-material'
import { Chip, Stack, Step, StepIndicator, Stepper, Typography } from '@mui/joy'
import { timeline } from './../data/timeline.json'
import dayjs from 'dayjs'
import { Job } from '../types/job'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type Props = {
  job: Job
}

function JobStep(props: Props) {
  const { job } = props

  return (
    <Step
      indicator={
        <StepIndicator>
          <CircleRounded />
        </StepIndicator>
      }
    >
      <Stack direction="row" alignItems="center" spacing={4}>
        <Chip
          color="primary"
          variant="solid"
          sx={{
            py: 1,
            '--Chip-paddingInline': '16px',
            '--Chip-radius': '6px',
            fontWeight: 'lg',
          }}
        >
          {dayjs(job.started).format('MMM YYYY')}
        </Chip>

        <Typography>{job.title}</Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography level="body-sm">
          {job.company} - {job.location}
        </Typography>

        <Typography>{job.description}</Typography>
      </Stack>
    </Step>
  )
}

export default function Timeline() {
  return (
    <Stack id="timeline" spacing={2} width="100%" alignItems="center">
      <Typography level="h2">Experience</Typography>

      <Stepper
        orientation="vertical"
        sx={{
          alignSelf: 'start',
          '--Stepper-verticalGap': '2.5rem',
          '--StepIndicator-size': '2rem',
          '--Step-connectorThickness': '3px',
          '--Step-connectorRadius': '1rem',
          '--Step-connectorInset': '0.2rem',
          '--Step-gap': '1rem',
        }}
      >
        {timeline.map((job, idx) => (
          <JobStep key={idx} job={job} />
        ))}
      </Stepper>
    </Stack>
  )
}
