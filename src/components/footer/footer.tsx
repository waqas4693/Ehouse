import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'secondary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}>
      <Container sx={{ pb: 15, width: '70%' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h3" variant="h3" sx={{ mb: 2, color: '#FFFFFF' }}>
                Education House Leeds
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Discover English mastery at Education House Leeds – your trusted learning partner.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>


      <hr style={{
        backgroundColor: '#FFFFFF',
        height: '1px',
        margin: '0 auto',
        border: 'none',
        width: '70%'
      }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 2,
          color: 'grey',
          '& ul': {
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            gap: '30px',
          },
          '& li': {
            display: 'inline-block',
            fontSize: '14px'
          },
        }}
      >
        <ul>
          <li>Participant Attendance Policy</li>
          <li>Quality Assurance Policy</li>
          <li>Refund Policy</li>
          <li>Synopsis of Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </Box>
      <hr style={{
        backgroundColor: '#FFFFFF',
        height: '1px',
        margin: '0 auto',
        border: 'none',
        width: '70%'
      }} />

      <Container sx={{ pt: 5, width: '70%' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9}>
            <Box sx={{ width: { xs: '100%', md: 360 } }}>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Copyright © 2014 - 2021 Education House Leeds
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterSocialLinks />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer