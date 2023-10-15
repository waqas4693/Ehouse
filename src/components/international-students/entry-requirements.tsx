import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const EntryRequirements: FC = () => {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          component="h2"
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

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="h5">
          {
            'There are no specific recommended prior learning requirements for business and management' +
            ' training at level 2. Communicating in English at reasonable competency level will be ' +
            'expected of all trainees. It is expected that trainees will have'
          }
        </Typography>
      </Box>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
              Basic numeracy skills
            </Typography>
          </Box>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
              Fundamental familiarity with simple ways of representing data like graphs, flow charts, percentage and etc
            </Typography>
          </Box>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
              Some experience of running a business or working for a business or background of business studies
            </Typography>
          </Box>
        </li>
      </ul>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant="h5">
          {
            'eHouse staff is happy to assist with anything unfamiliar to trainees during course programmes.'
          }
        </Typography>
      </Box>
    </Box>
  )
}

export default EntryRequirements