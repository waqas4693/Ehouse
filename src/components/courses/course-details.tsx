import React, { FC } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import RedCircleSVG from '@/components/courses/bullet-points-svg'
import { useTheme } from '@mui/material/styles'
import { Box, Typography, Paper, Grid, List, ListItem } from '@mui/material'

const CourseDetails: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const theme = useTheme()

  const styles = {
    someStyle: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    }
  }

  return (
    <Box>
      <Box
        sx={{
          pt: {
            xs: 6,
            md: 8,
          },
          pb: {
            xs: 8,
            md: 12,
          },
          px: 8,
          backgroundColor: '#ecf3f3',
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <img
              src='/images/courses/course-3-detailed.png'
              alt='Rectangular Image'
              style={{ width: '900px', height: '350px' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ height: '100%', borderRadius: '10px', padding: '16px' }}>
              <Typography variant="h3" sx={{ fontSize: '24px' }}>Course Profile</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Duration:</span><span style={{ fontSize: '16px', color: '#909090' }}>11 Months</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Lessons Per Week:</span><span style={{ fontSize: '16px', color: '#909090' }}>5</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Hours Per Week:</span><span style={{ fontSize: '16px', color: '#909090' }}>15</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Class Time:</span><span style={{ fontSize: '16px', color: '#909090' }}>MON to FRI From 10 AM-1 PM</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Suitable For:</span><span style={{ fontSize: '16px', color: '#909090' }}> Education, Work or Socializing</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Level:</span><span style={{ fontSize: '16px', color: '#909090' }}>Certificate</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Registration Fee:</span><span style={{ fontSize: '16px', color: '#909090' }}>£300 (Non refundable)</span>
                </li>
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Course Fee:</span><span style={{ fontSize: '16px', color: '#909090' }}>£4500</span>
                </li>
              </ul>
            </Paper>

          </Grid>
        </Grid>

        <Grid container sx={{ py: '30px' }}>
          <Grid item xs={9}>

            <Typography variant='h2' sx={{ pb: '20px', fontSize: '36px', color: 'secondary.main' }}>
              Business English Course <span style={{ color: 'black' }}>- 11 Months</span>{' '}
            </Typography>

            <Typography variant='body1' sx={{ pr: '67px' }}>
              Business English Course is designed to help students develop and enhance their language skills in the
              context of professional settings. This course focuses on improving English proficiency in general and
              business environment. The course is suitable for intermediate to advanced English learners who wish to
              excel in their professional careers.
            </Typography>

          </Grid>
          <Grid item xs={3}>

            <Paper elevation={3} sx={{ height: '100%' }}></Paper>

          </Grid>
        </Grid>

        <List>
          <Typography variant='h3'>Business English Course Benefits</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: '16px' }}>
                <RedCircleSVG />
                Develop business-specific and professional vocabulary
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Enhances the skills of listening, speaking, reading, and writing necessary for general and Business
                environment
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Improve your confidence when conducting business in an international environment
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Communicate more effectively and fluently in the workplace
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Confidently Participate in meetings (both online and face-to-face)
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Network with greater confidence
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Develop the communication skill you need to excel in your current or future role
              </li>
            </ul>
          </ListItem>

          <Typography variant='h3'>Course Objectives</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Enhance vocabulary and language proficiency specific to various business contexts.
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Develop fluency and accuracy in spoken English for general and business communication.
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Enhance listening comprehension skills for better understanding of general and business conversations.
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Improve reading skills to comprehend business-related texts, reports, and articles.
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Strengthen writing skills to effectively convey information and ideas in various business formats.
              </li>
            </ul>
          </ListItem>

          <Typography variant='h3'>Course Summary</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Duration: 11 Months
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Lessons Per Week: 5
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Hours Per Week: 15
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Class Time: MON to FRI From 10 AM-1 PM
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Suitable For: Education, Work or Socializing
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Level: Certificate
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Registration Fee: £300 (Non refundable)
              </li>
              <li style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                Course Fee: £4500
              </li>
            </ul>
          </ListItem>
        </List>
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{ backgroundColor: 'common.white', py: 5, px: 5 }}
      >
        <Typography variant='h2'>Reach out to us</Typography>
        <Box display='flex' alignItems='center'>
          <img src='/images/whatsapp.svg' alt='WhatsApp Logo' />
          <Typography variant='h3'>+447455 222161</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseDetails
