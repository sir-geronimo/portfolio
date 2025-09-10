import { KeyboardArrowRightRounded } from '@mui/icons-material'
import { Box, Button, Grid, Link, Sheet, Typography } from '@mui/joy'

export default function Header() {
  return (
    <Sheet
      sx={{
        position: 'fixed',
        top: 0,
        width: '100dvw',
        zIndex: 99,
        boxShadow: 'md',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          maxWidth: {
            xs: '100%',
            md: '1275px',
          },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="#">
          <Typography>Enger Jiménez</Typography>
        </Link>

        <Grid container gap={2} alignItems="center">
          {[
            ['#about', 'About'],
            ['#projects', 'Projects'],
            ['#timeline', 'Timeline'],
          ].map(([id, title], idx) => (
            <Grid key={idx}>
              <Link href={id}>
                <Typography>{title}</Typography>
              </Link>
            </Grid>
          ))}

          <Grid key={99}>
            <Button component={Link} href="resume.pdf" download target="_blank" endDecorator={<KeyboardArrowRightRounded />}>
              <Typography>Download CV</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Sheet>
  )
}
