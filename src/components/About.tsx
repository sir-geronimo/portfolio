import { Stack, Typography } from '@mui/joy'

export default function About() {
  return (
    <Stack spacing={2} alignItems="center" id="about">
      <Typography level="h1">Enger Jiménez</Typography>

      <Typography level="title-lg">Software Engineer</Typography>

      <Stack spacing={2} sx={{ textAlign: 'justify' }}>
        <Typography>
          Welcome to my digital space! I am a passionate software professional dedicated to enhancing your digital experience. My journey is defined by a constant quest for <b>new skills</b> and a
          keen exploration of cutting-edge technologies. My mission? To not just deliver high-quality software solutions but to <b>craft innovations</b> that precisely align with the unique needs and
          aspirations of each project.
        </Typography>

        <Typography>
          In my portfolio, you'll discover a solid foundation in software development methodologies and best practices. I take pride in steering cross-functional teams to success, consistently
          exceeding expectations with projects that seamlessly blend precision and creativity.
        </Typography>

        <Typography>Join me on a journey of innovation and excellence. I am ready to bring your visions to life through bespoke, user-friendly, and forward-thinking software solutions.</Typography>

        <Typography fontWeight="bold" fontStyle="italic">
          Let's create something extraordinary together.
        </Typography>
      </Stack>
    </Stack>
  )
}
