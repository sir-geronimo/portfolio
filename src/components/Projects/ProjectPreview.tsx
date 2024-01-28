import { Box } from '@mui/joy'
import { ChatRounded, ImageRounded } from '@mui/icons-material'
import { Project } from '../../types/project'
import { useState } from 'react'

type Props = {
  project: Project
}

export function ProjectPreview(props: Props) {
  const { project } = props
  const [showThumbnail, setShowThumbnail] = useState(true)

  function handlePreviewClick(): void {
    if (project.url) {
      setShowThumbnail(false)
    }
  }

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
        project.preview !== null && showThumbnail ? (
          <img src={project.preview} width="100%" onClick={handlePreviewClick} />
        ) : (
          <iframe
            width="1920"
            height="1080"
            src={project.url}
            title={project.title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )
      ) : project.type === 'blog' ? (
        <ImageRounded sx={{ fontSize: '3rem', opacity: 0.3 }} />
      ) : project.type === 'repo' ? (
        project.preview !== null && <img src={project.preview} width="100%" onClick={handlePreviewClick} />
      ) : (
        <ChatRounded sx={{ fontSize: '3rem', opacity: 0.3 }} />
      )}
    </Box>
  )
}
