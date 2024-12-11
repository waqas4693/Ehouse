import React, { FC } from 'react'
import RedCircleSVG from '@/components/courses/bullet-points-svg'
import { useRouter } from 'next/router'
import { Box, Typography, Paper, Grid, List, ListItem } from '@mui/material'
import { data } from './all-english-courses.data'

const CourseDetails: FC = () => {
  const router = useRouter()
  const { courseId } = router.query
  const detail = data.find(course => course.id === Number(courseId))

  return (
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
        px: {
          xs: 2,
          md: 8,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <img
            src={detail?.cover}
            alt='Rectangular Image'
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ borderRadius: '10px', padding: '16px' }}>
            <Typography variant="h3" sx={{ fontSize: '24px' }}>Course Profile</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Duration</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.duration}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Lessons Per Week</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.lessonsPerWeek}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Hours Per Week</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.hoursPerWeek}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Class Time</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.classTime}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Level</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.level}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Registration Fee</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.registerationFee}</span>
              </li>
              <li>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Course Fee</span>
                <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.price}</span>
              </li>
              {detail?.deliveryMethod && (
                <li>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px' }} />
                  <span style={{ fontWeight: 600, fontSize: '16px', marginRight: '8px' }}>Delivery Method</span>
                  <span style={{ fontSize: '16px', color: '#909090' }}>{detail?.deliveryMethod}</span>
                </li>
              )}
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ py: '30px' }}>
        <Grid item xs={12}>
          <Typography variant='h2' sx={{ pb: '20px', fontSize: '36px', color: 'secondary.main' }}>
            {detail?.title} <span style={{ color: 'black' }}>- {detail?.duration}</span>{' '}
          </Typography>

          <Typography variant='body1'>
            {detail?.description}
          </Typography>
        </Grid>
      </Grid>

      <List>
        <Typography variant='h3'>Course Contents</Typography>
        <ListItem sx={{ py: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {detail?.contents.map((item, index) => (
              <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                {item}
              </li>
            ))}
          </ul>
        </ListItem>

        <Typography variant='h3'>Course Benefits</Typography>
        <ListItem sx={{ py: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {detail?.courseBenefits.map((item, index) => (
              <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                {item}
              </li>
            ))}
          </ul>
        </ListItem>

        <Typography variant='h3'>Course Objectives</Typography>
        <ListItem sx={{ py: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {detail?.courseObjectives.map((item, index) => (
              <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                {item}
              </li>
            ))}
          </ul>
        </ListItem>

        <Typography variant='h3'>This Course Is For</Typography>
        <ListItem sx={{ py: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {detail?.whoIsThisCourseFor.map((item, index) => (
              <li key={index} style={{ fontSize: '16px', fontWeight: 400 }}>
                <RedCircleSVG />
                {item}
              </li>
            ))}
          </ul>
        </ListItem>
      </List>

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