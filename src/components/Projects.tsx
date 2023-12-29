import { Grid, Stack, Typography } from '@mui/joy'
import { projects } from './../data/projects.json'
import ProjectCard from './Projects/ProjectCard'

export default function Projects() {
  return (
    <Stack spacing={2} alignItems="center" id="projects">
      <Typography level="h2">Projects</Typography>

      <Grid container gap={2}>
        {projects.map((project, idx) => (
          <Grid>
            <ProjectCard key={idx} project={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
