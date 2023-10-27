import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


const Accomodation: FC = () => {
  const accomodation = [
    {
      text: 'Could provide the necessary assistance to ensure that delegates secure suitable accommodation for the duration of their course / training'
    },
    { text: 'Would send a list of hotels within walking distance from the training centre on request. ' }
  ];
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
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

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Participants are free to arrange their own accommodations; however, Education House Leeds would
              make arrangements for accommodation on request. Delegates are strongly advised to book
              accommodation prior to their Visa application and obtain a booking confirmation. Proof of
              accommodation is a necessary requirement for most Student Visitor Visa applicants.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'secondary.main',
                fontSize: { xs: 15, md: 36 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Education House Leeds
            </Typography>
          </Box>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {accomodation.map((item, index) => (
              <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                {item.text}
              </li>
            ))}
          </ul>

        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/images/accommodation.svg" alt="Image" style={{ width: '100%' }} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'secondary.main',
                fontSize: { xs: 15, md: 36 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Please Note
            </Typography>
          </Box>

          <Box sx={{ mb: 2, backgroundColor: 'rgba(221, 73, 73, 0.1)', padding: '20px', borderRadius: '10px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {accomodation.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
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