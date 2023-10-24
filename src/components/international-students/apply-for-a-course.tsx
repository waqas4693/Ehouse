import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import HomeCourse from '@/components/home/course'


function courseData(
  courseName: string,
  duration: string,
  price: string
): { courseName: string; duration: string; price: string } {
  return { courseName, duration, price }
}


const ApplyForACourse: FC = () => {

  const applyforacourse = [
    { text: 'Fill in Online Registration Assessment Form' },
    { text: 'Wait for approval of Registration Assessment Form' },
    { text: 'Get Visa Support Letter and apply for UK Visitor Visa to join course' }
  ];

  return (
    <Box>
      <Box sx={{ px: 10, py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
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
                Apply For A Course
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '28px', fontWeight: 600 }} variant="body1">
                Training in 3 easy steps
              </Typography>
            </Box>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {applyforacourse.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 30 }}>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                  {item.text}
                </li>
              ))}

            </ul>


          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/images/applyforacourse.svg" alt="Image" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: 10, py: 5, backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box sx={{ mb: 3 }}>
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
                Courses
              </Typography>
            </Box>
            <Box>
              <HomeCourse />
            </Box>

          </Grid>


        </Grid>
      </Box>
    </Box>
  )
}

export default ApplyForACourse
