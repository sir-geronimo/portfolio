import { AspectRatio, Button, Card, CardActions, CardContent, CardOverflow, Chip, Link, Stack, Typography } from '@mui/joy'
import { ProjectPreview } from './ProjectPreview'

export type Project = {
  title: string
  description: string
  url: string
  type: 'video' | 'blog' | string
  tags: string[]
  links: { title: string; url: string }[]
}

type Props = {
  project: Project
}

export default function ProjectCard(props: Props) {
  const { project } = props

  return (
    <Card sx={{ minWidth: 320, maxWidth: 410, height: '100%' }}>
      <CardOverflow>
        <AspectRatio ratio="16/9">
          <ProjectPreview project={project} />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Link href={project.url}>
          <Typography level="title-lg">{project.title}</Typography>
        </Link>

        <Typography level="body-md">
          <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
        </Typography>
      </CardContent>

      {project.links.length > 0 && (
        <CardContent>
          <Stack direction="row-reverse" spacing={1}>
            {project.links.map((link, idx) => (
              <Button key={idx} component={Link} href={link.url} target="_blank" rel="noreferrer" variant="outlined">
                {link.title}
              </Button>
            ))}
          </Stack>
        </CardContent>
      )}

      <CardActions>
        {project.tags.sort().map((tag, idx) => (
          <Chip key={idx}>{tag}</Chip>
        ))}
      </CardActions>
    </Card>
  )
}
