import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';

const StyledVideo = styled('video')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 775
  }
}));

const HomeVideo: FC = () => {
  return (
    <Box
      id="video-section"
      sx={{
        backgroundColor: '#ecf3f3',
        position: 'relative',
        pt: 4,
        pb: { xs: 8, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>

            <Box sx={{ mb: 3 }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 20, md: 41 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'secondary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Unlock Your Future{' '}
                </Typography>
                <Typography
                  component="div"
                  sx={{

                    display: 'block',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 1.3,
                  }}
                >
                  Learn English With Education House Leeds
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '18px', fontWeight: 400 }} variant="h4">
                {
                  'Empowering You with World-Class English Courses for Global Success'
                }
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
              <StyledVideo controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeVideo