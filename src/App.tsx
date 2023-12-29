import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'
import { CssBaseline, CssVarsProvider, IconButton, Sheet, Stack, useColorScheme } from '@mui/joy'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import Header from './components/Header.tsx'
import Timeline from './components/Timeline.tsx'

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      title="Toggle theme"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark')
        } else {
          setMode('light')
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRounded /> : <LightModeRounded />}
    </IconButton>
  )
}

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <ColorSchemeToggle />

      <Header />
      
      <Sheet
        variant="soft"
        sx={{
          maxWidth: {
            xs: '100%',
            md: '1280px',
          },
          margin: '0 auto',
          mt: '100px',
          padding: '2rem',
        }}
      >
        <Stack
          spacing={6}
          alignItems="center"
          sx={{
            maxWidth: 860,
            px: 1,
            mx: 'auto',
          }}
        >
          <About />
          <Projects />
          <Timeline />
          <Footer />
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
