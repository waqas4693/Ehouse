import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeFeature2: FC = () => {
  return (
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 20, md: 38 },
                mt: { xs: 0, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              It&apos;s easy,
              it&apos;s brilliant,
              it works!
            </Typography>

            <StyledSlickContainer>

              {/* Point No 1 */}
              <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    mr: 1,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    height: 36,
                    width: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    '& svg': {
                      fontSize: 20,
                    },
                  }}
                >
                  < ArtTrackIcon />
                </Box>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                    Select a course & explore it!
                  </Typography>
                  <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                    Check start date, end date, learning outcomes, certification, fees and more
                  </Typography>
                </Box>
              </Box>

              {/* Point No 2 */}
              <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    mr: 1,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    height: 36,
                    width: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    '& svg': {
                      fontSize: 20,
                    },
                  }}
                >
                  < ArtTrackIcon />
                </Box>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                    Fill in RA Form & wait for approval!
                  </Typography>
                  <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                    Upload supporting documents after the approval of registration assessment form</Typography>
                </Box>
              </Box>

              {/* Point No 3 */}
              <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    mr: 1,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    height: 36,
                    width: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    '& svg': {
                      fontSize: 20,
                    },
                  }}
                >
                  < ArtTrackIcon />
                </Box>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                    Get enrolled and join eHouse for a better future
                  </Typography>
                  <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                    Get a visa support letter, apply for a UK Visitor Visa and join a course or training programme</Typography>
                </Box>
              </Box>
            </StyledSlickContainer>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
            <Image src="/images/home-feature-2.svg" width={475} height={430} quality={97} alt="Feature 2" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature2