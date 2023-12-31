import { Box } from '@mui/joy'
import { ChatRounded, ImageRounded } from '@mui/icons-material'
import { Project } from '../../types/project'

type Props = {
  project: Project
}

export function ProjectPreview(props: Props) {
  const { project } = props

  return (
    <Box
      sx={{
        width: '100%',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {project.type === 'video' ? (
        <iframe
          width="100%"
          height="100%"
          src={project.url}
          title={project.title}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : project.type === 'blog' ? (
        <ImageRounded sx={{ fontSize: '3rem', opacity: 0.3 }} />
      ) : (
        <ChatRounded sx={{ fontSize: '3rem', opacity: 0.3 }} />
      )}
    </Box>
  )
}
