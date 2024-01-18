import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Accomodation: FC = () => {
  const notePoints = [
    {
      text: 'Accommodation costs are not included in the course/training fees.',
    },
    { text: 'You will need to make payments for accommodations directly to the providers.' },
    {
      text: 'You are responsible for covering the expenses of your stay, and all outstanding payments must be settled before you depart.',
    },
  ]
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant='h2'
              sx={{
                position: 'relative',
                color: 'secondary.main',
                fontSize: { xs: 15, md: 36 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Accommodation
            </Typography>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              At Education House Leeds, we want to make sure you have a smooth experience during your
              course or training. Although we don&apos;t handle accommodation bookings directly,
              we encourage our participants to take charge and find their own places to stay.
            </Typography>
          </Box>

          <Box sx={{ mb: 1 }}>
            <Typography
              variant="h3"
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Education House Leeds
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '14px' }} variant='body1'>
              <img
                src='/images/red-arrow.svg'
                alt='Arrow'
                style={{ marginRight: '8px', transform: 'translateY(3px)' }}
              />
              We help guide our students/delegates to reliable websites like Zoopla, Rightmove, and Gumtree,
              where you can explore a variety of options for suitable accommodations.
              This way, you can focus on your learning without worrying about where to stay.
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={12} md={4}>
          <img src='/images/accommodation.svg' alt='Image' style={{ width: '100%' }} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Please Note
            </Typography>
          </Box>

          <Box sx={{ mb: 2, borderRadius: '10px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {notePoints.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                  <img
                    src='/images/red-arrow.svg'
                    alt='Arrow'
                    style={{ marginRight: '8px', transform: 'translateY(3px)' }}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Accomodation