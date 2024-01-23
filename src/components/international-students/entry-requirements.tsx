import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const EntryRequirements: FC = () => {
  const entryRequirementsCompulsory = [
    { text: 'Age: Over 18 years' },
    {
      text: 'Qualification: 12 years schooling or above',
    },
    { text: 'English language proficiency: Basic to intermediate' }
  ]

  const entryRequirementsRecommended = [
    { text: 'Minimum marks in most recent qualification: 50%' },
    {
      text: 'English subject minimum marks in most recent qualification: 50%',
    },
    { text: 'English language proficiency certificate: Preferred' },
    { text: 'Maximum study gap: Few months' }
  ]

  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 5 }}>
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
              Entry Requirements
            </Typography>
          </Box>

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
            Compulsory
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {entryRequirementsCompulsory.map((item, index) => (
              <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                <img src='/images/red-arrow.svg' alt='Arrow' style={{ marginRight: '8px' }} />
                {item.text}
              </li>
            ))}
          </ul>

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
            Recommended
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {entryRequirementsRecommended.map((item, index) => (
              <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                <img src='/images/red-arrow.svg' alt='Arrow' style={{ marginRight: '8px' }} />
                {item.text}
              </li>
            ))}
          </ul>

          <Box sx={{ mb: 1 }}>
            <Typography variant='body1'>
              eHouse staff is happy to assist with anything unfamiliar to trainees during course programmes.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src='/images/entry-requirements.svg' alt='Image' style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default EntryRequirements