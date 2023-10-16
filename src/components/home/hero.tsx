import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{
      backgroundImage: 'url("/images/home-hero.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      py: { xs: 8, md: 16 },
      zIndex: 0
    }}>
      <div
        style={{
          position: 'absolute',
          content: '',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))',
          zIndex: -1
        }}
      ></div>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 35, md: 40 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    color: 'common.white'
                  }}
                >
                  Unlocking Language Brilliance
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'common.white', lineHeight: 1.6 }} variant="h4">
                  {
                    'Learn English, Transform Opportunities'
                  }
                </Typography>
                <Typography sx={{ color: 'common.white', lineHeight: 1.6 }} variant="h4">
                  {
                    'Your gateway to global success'
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="secondary" size="large" variant="contained">
                    Register Now
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero