import React, { FC } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import RedCircleSVG from '@/components/courses/bullet-points-svg'
import { useTheme } from '@mui/material/styles'
import { Box, Typography, Paper, Grid, List, ListItem } from '@mui/material'

const CourseDetails: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const theme = useTheme()

  const courseDetails = [
    {
      label: 'Duration:',
      value: '11 Months',
    },
    {
      label: 'Lessons Per Week:',
      value: '5',
    },
    {
      label: 'Hours Per Week:',
      value: '15',
    },
    {
      label: 'Class Time:',
      value: 'MON to FRI From 10 AM-1 PM',
    },
    {
      label: 'Suitable For:',
      value: 'Education, Work or Socializing',
    },
    {
      label: 'Level:',
      value: 'Certificate',
    },
    {
      label: 'Registration Fee:',
      value: '£300 (Non refundable)',
    },
    {
      label: 'Course Fee:',
      value: '£4500',
    },
  ];

  const courseBenefits = [
    { text: 'Develop business-specific and professional vocabulary' },
    { text: 'Enhances the skills of listening, speaking, reading, and writing necessary for general and Business environment' },
    { text: 'Improve your confidence when conducting business in an international environment' },
    { text: 'Communicate more effectively and fluently in the workplace' },
    { text: 'Confidently Participate in meetings (both online and face-to-face)' },
    { text: 'Network with greater confidence' },
    { text: 'Develop the communication skill you need to excel in your current or future role' }
  ];

  const courseObjectives = [
    'Enhance vocabulary and language proficiency specific to various business contexts.',
    'Develop fluency and accuracy in spoken English for general and business communication.',
    'Enhance listening comprehension skills for better understanding of general and business conversations.',
    'Improve reading skills to comprehend business-related texts, reports, and articles.',
    'Strengthen writing skills to effectively convey information and ideas in various business formats.',
  ];

  const courseSummary = [
    'Duration: 11 Months',
    'Lessons Per Week: 5',
    'Hours Per Week: 15',
    'Class Time: MON to FRI From 10 AM-1 PM',
    'Suitable For: Education, Work, or Socializing',
    'Level: Certificate',
    'Registration Fee: £300 (Non refundable)',
    'Course Fee: £4500',
  ];

  const contents = [
    'Business English Course Benefits',
    'Course Objectives',
    'Course Summary'
  ];

  const styles = {
    someStyle: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
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
          <Grid item xs={9}>
            <img
              src='/images/courses/course-3-detailed.png'
              alt='Rectangular Image'
              style={{ width: '900px', height: '350px' }}
            />
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ height: '100%', borderRadius: '10px', padding: '16px' }}>
              <Typography variant="h3" sx={{ fontSize: '24px' }}>Course Profile</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {courseDetails.map((detail, index) => (
                  <li key={index}>
                    <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                    <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }} >
                      {detail.label}
                    </span>
                    <span style={{ fontSize: '16px', color: '#909090' }}>
                      {detail.value}
                    </span>
                  </li>
                ))}
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

          <Paper sx={{ height: '100%', borderRadius: '10px', padding: '16px' }}>
              <Typography variant="h3" sx={{ fontSize: '24px' }}>Contents</Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {contents.map((item, index) => (
                  <li key={index}>
                    <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                    <span style={{ fontWeight: 600, fontSize: '14px', marginRight: '8px' }} >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Paper>
            
          </Grid>
        </Grid>

        <List>
          <Typography variant='h3'>Business English Course Benefits</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              {courseBenefits.map((item, index) => (
                <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                  <RedCircleSVG />
                  {item.text}
                </li>
              ))}
            </ul>
          </ListItem>

          <Typography variant='h3'>Course Objectives</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              {courseObjectives.map((item, index) => (
                <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                  <RedCircleSVG />
                  {item}
                </li>
              ))}
            </ul>
          </ListItem>

          <Typography variant='h3'>Course Summary</Typography>
          <ListItem sx={{ py: '20px' }}>
            <ul style={{ listStyle: 'none' }}>
              {courseSummary.map((item, index) => (
                <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                  <RedCircleSVG />
                  {item}
                </li>
              ))}
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
