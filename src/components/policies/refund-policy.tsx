import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ArrivingInUk = () => {
    return (
        <Box sx={{ px: 10, py: 5 }}>
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
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Participant Attendance And Punctuality Policy{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 24, md: 34 },
                      left: 2,
                      transform: 'rotate(3deg)',
                      '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line */}
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    mt: 5,
                    display: 'block',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 1.3,
                  }}
                >
                  
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant="h5">
                {
                  'Testing'
                  }
              </Typography>

            </Box>
        </Box>
    )
}

export default ArrivingInUk