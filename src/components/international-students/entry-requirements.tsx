import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const EntryRequirements: FC = () => {
  const entryRequirements = [
    { text: 'Age: 18 or plus years' },
    { text: 'Language Proficiency: Basic understanding of english language' },
    {
      text: 'Educational background: Minimum 10 years schooling or above with 50 % marks in English in latest qualification',
    },
    {
      text: 'Payment of course fees: Ensure that you can meet the financial obligations associated with the course, including tuition fees and any additional costs',
    },
    { text: 'Proof of Identity: A passport valid for at least six months is required' },
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

          {/* <Box sx={{ mb: 1 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              There are no specific recommended prior learning requirements for business and management training at
              level 2. Communicating in English at a reasonable competency level will be expected of all trainees. It is
              expected that trainees will have
            </Typography>
          </Box> */}

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {entryRequirements.map((item, index) => (
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