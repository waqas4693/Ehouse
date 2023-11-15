import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const SynopsisOfPolicies: FC = () => {
  return (
    <Box>
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
                Synopsis of Policy
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'black',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Health & Safety Policy
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Our Health and Safety Manager ensures the learning environment is safe and that qualified First Aiders are available to deal with any incidents.
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography sx={{ lineHeight: 1.4, fontSize: '16px' }} variant="body1">
                Education House Leeds:
              </Typography>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Complies with the Health & Safety at Work laws. Any incidents are to be reported and recorded by the Health and Safety Manager of eHouse.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Has a responsibility to protect participants’ health, safety and wellbeing whilst they are studying and we take the security of participants and their belonging in
                  eHouse very seriously.
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Safeguarding Policy
              </Typography>

              <Typography sx={{ lineHeight: 1.4, fontSize: '16px', marginTop: '16px' }} variant="body1">
                Education House Leeds:
              </Typography>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Takes seriously its responsibility to safeguard all participants during their time as participants.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Ensures that all staff are trained to deal with safeguarding in a professional and sensitive way.
                </li>
              </ul>

              <Typography sx={{ lineHeight: 1.4, fontSize: '16px' }} variant="body1">
                Our <b>Health and Safety Manager,</b> provide support with any personal and domestic difficulties reported to him / her which may prevent participants continuing and
                progressing.
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Bullying And Harassment Policy
              </Typography>

              <Typography sx={{ lineHeight: 1.4, fontSize: '16px', marginTop: '16px' }} variant="body1">
                Education House Leeds:
              </Typography>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Recognises respect and inclusionas fundamental values in the delivery of professional training.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Will not tolerate bullying, harassment or victimisation and will ensure that every delegate/ participant has the right not to be bullied or harassed and has the right
                  to complain without victimisation.
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Equality and Diversity Policy
              </Typography>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Our participants reflect the population at large & include people with a variety of faiths, beliefs, ethnicities, abilities, sexual & gender orientations.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Under eHouse’s Equality & Diversity Policyall participants have the right to learn& achieve and to be treated fairly in all aspects of their learning at eHouse.
                </li>
              </ul>
            </Box>


            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                GDPR Policy
              </Typography>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Education House Leeds fully complies with all rules of data protection as stated in the GDPR.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Participants’ information is stored and used for effective and efficient communication by eHouse staff with participants and / or their employers.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>These pieces of information include participant’s name, age, address, details of next of kin, employers’ details, professional and academic qualifications.
                </li>
                <li style={{ lineHeight: 1.5, }} >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>We store participant details on an electronic systems that provides access onlyto authorized staff members. Third party or public access to data is denied.
                  Participants can access their own information by means of a written request. We make sure the information is used fairly and lawfully for specific and essential
                  purposes. Information on our database is not given to third parties except the with written permission of the student /participant concerned.
                </li>
              </ul>
            </Box>



          </Grid>
        </Grid>
      </Box>

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

export default SynopsisOfPolicies