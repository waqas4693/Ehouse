import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const QualityAssurancePolicy: FC = () => {

  const reviewandquality = [
    {
      text: 'Quality of training / teaching.'
    },
    {
      text: 'Experience of learners, teachers, assessors and eHouse management staff.'
    },
    { text: 'Repute and image of Education House Leeds (eHouse).' }
  ];

  return (
    <Box >
      <Box sx={{ px: 10, py: 5 }}>
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
                Synopsis of Internal Review & Quality Assurance Policy
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Regular Quality Review and Standardization Meetings (QRS Meetings) will be held in order to improve the
              </Typography>

            </Box>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reviewandquality.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                  {item.text}
                </li>
              ))}
            </ul>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                QRS Meetings will be conducted according to below mentioned
              </Typography>

            </Box>

            <Box sx={{ backgroundColor: '#fff', border: '2px lightgray solid', borderRadius: '5px', width: '100%', mb: 2 }}>

              <Grid container sx={{ margin: 0, p: 2 }} >
                <Grid item xs={12} md={3} >
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: { xs: 15, md: 18 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >
                    Frequency
                  </Typography>

                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                    Three times a year (April, August & December)
                  </Typography>
                </Grid>
              </Grid>

              <Grid container sx={{ margin: 0, p: 2, backgroundColor: 'rgba(221, 73, 73, 0.1)' }}>
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: { xs: 15, md: 18 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >
                    Called & Managed by
                  </Typography>

                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                    Quality Assurance Committee
                  </Typography>
                </Grid>
              </Grid>

              <Grid container sx={{ margin: 0, p: 2 }} >
                <Grid item xs={12} md={3} >
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: { xs: 15, md: 18 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >
                    Attendees
                  </Typography>

                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                    Education House Leeds Staff
                  </Typography>
                </Grid>
              </Grid>

            </Box>


            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'secondary.main',
                  fontSize: { xs: 15, md: 28 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Purpose of QRS Meetings
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'black',
                  paddingTop: '15px',
                  fontSize: { xs: 15, md: 28 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                To:
              </Typography>


              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Ensure courses are effective and achieving their aims and objectives.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Clearly define the roles and responsibilities of staff.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Review the feedback formsof all participants and staff.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Identify areas requiring improvement.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Share best practices.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Ensure compliance with relevant codes of practice.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Ensure the implementation of policies and procedures.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Implement changes and developments.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Provide a consistent experience and knowledge for all participants.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Contribute to the continuous development of teaching / training and administrative staff.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.10em' }}>&bull; </span>Continuous review and improvement of the feedback audit trail.
                </li>

              </ul>
            </Box>


          </Grid>
        </Grid>

      </Box >

      <Box sx={{ backgroundColor: '#fff' }}>

        <Grid container sx={{ px: 10, py: 7 }}>
          <Grid item xs={12} md={6}>

            <Box sx={{}}>
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
                Reach out to us
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={12} md={6}>

            <Box sx={{ float: 'right' }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'black',
                  fontSize: { xs: 15, md: 28 },
                  letterSpacing: 1.5,
                  fontWeight: 'normal',
                  lineHeight: 1.3,
                }}
              >
                +447455 222161
              </Typography>
            </Box>

          </Grid>
        </Grid>


      </Box>
    </Box>
  )
}

export default QualityAssurancePolicy