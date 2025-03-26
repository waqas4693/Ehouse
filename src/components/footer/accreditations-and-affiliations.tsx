import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const AccreditationsAndAffiliations: FC = () => {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box sx={{ mb: 2 }}>
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
              Accreditations And Affiliations
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid key='image1' item xs={12} md={4}>
          {' '}
          {/* Added key prop */}
          <img src='/images/institutes/2.jpg' alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              British Accreditation Council now accredits us to deliver Business management training, an accomplishment
              we attained in August 2020. This denotes that we have satisfied BAC’s rigorous and thorough inspection
              process and met the approval of the Accreditation Committee to run Business management training started in
              2021. This is a most notable achievement and a significant mark of educational quality that serves to
              guarantee the exceptionality of our staff, compliance, and training programmes. It is a globally
              recognized accreditation. This is reassurance and reinforcement that our institute is credible and has the
              right to deliver the courses or programmes within the accredited provision.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid key="image2" item xs={12} md={4}>
          <img src='/images/institutes/1.jpg' alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'></Typography>
          </Box>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        <Grid key='image3' item xs={12} md={4}>
          <img src='/images/institutes/3.jpg' alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              Education House Leeds is registered by the prestigious UK’s independent authority, ICO.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              ICO was established to uphold information rights in the public interest, promoting openness by public
              bodies and data privacy for individuals.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid key='image4' item xs={12} md={4}>
          {' '}
          {/* Added key prop */}
          <img src='/images/institutes/4.jpg' alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              Education House Leeds is registered as Verified Learning Providers in the UK by the foremost UKRLP.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              The United Kingdom Register of Learning Providers (UKRLP) is a Government Register of Verified Learning
              Providers in the UK and is used by government departments agencies such as the Learning and Skills
              Council, Careers Advice Service, HESA, HEFCE and UCAS, and by learners and employers.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              The UKRLP has grown its registration base by verifying each training provider against a recognised
              external source and allocating them a unique UK Provider Reference Number (UKPRN) which is used to share
              information with the UKRLP partner agencies.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid key='image5' item xs={12} md={4}>
          <img src='/images/institutes/5.jpg' alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              Education House Leeds is accredited by the Organisation for Tourism and Hospitality Management (OTHM).
              This prestigious accreditation allows us to deliver high-quality training and qualifications. OTHM’s
              rigorous accreditation process ensures that our teaching, course structure, and assessments meet the
              highest standards. As an Ofqual-regulated awarding body, OTHM guarantees that the qualifications learners
              receive are recognized both nationally and internationally.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              This accreditation reassures our students and stakeholders that our institution provides
              industry-recognized qualifications, equipping learners with the skills needed to excel in their careers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AccreditationsAndAffiliations
