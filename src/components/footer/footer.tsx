import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component='footer'
      sx={{ backgroundColor: 'secondary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container sx={{ pb: 15, width: '80%' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component='h3' variant='h3' sx={{ mb: 2, color: '#FFFFFF' }}>
                Education House Leeds
              </Typography>
              <Typography variant='subtitle1' sx={{ letterSpacing: 1, mb: 2 }}>
                Discover English mastery at Education House Leeds – your trusted learning partner.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>

      <hr
        style={{
          backgroundColor: '#FFFFFF',
          height: '1px',
          margin: '0 auto',
          border: 'none',
          width: '70%',
        }}
      />
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
            fontSize: '14px',
          },
        }}
      >
        <ul>
          <li>
            <Link href="https://www.edusupplements.co.uk" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
              eduSupplements
            </Link>
          </li>

          <li>
            <Link href="https://student.ehouse.org.uk" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Student Login
            </Link>
          </li>
        </ul>
      </Box>
      <hr
        style={{
          backgroundColor: '#FFFFFF',
          height: '1px',
          margin: '0 auto',
          border: 'none',
          width: '70%',
        }}
      />

      <Container sx={{ pt: 5, width: '70%' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <FacebookIcon />
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.facebook.com/Training4Biz/?view_public_for=133224183810380'}
              >
                Business Management Training
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.facebook.com/ieltspreparation.ehouse'}
              >
                IELTS Prepration
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.facebook.com/mydrivingtheorytest'}
              >
                Driving Theory Test
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.facebook.com/lifeintheuktestuk'}
              >
                Life In The Uk Test
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <YouTubeIcon />
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.youtube.com/channel/UC-CyIMZ3GcC6C4U8ihkUptQ'}
              >
                eduSupplements
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.youtube.com/@educationhouseleeds5792'}
              >
                Education House Leeds
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <InstagramIcon />
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.instagram.com/educationhouseleeds'}
              >
                Business Training
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.instagram.com/lifeintheuktestleeds'}
              >
                Life In The Uk Test
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.instagram.com/drivingtheorytestleeds'}
              >
                Driving Theory Test
              </Link>
            </Box>
            <Box
              component='li'
              sx={{
                display: 'inline-block',
                color: 'primary.contrastText',
                mr: 3,
              }}
            >
              <Link
                target='_blank'
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'https://www.instagram.com/ehouseint/'}
              >
                eHouse International
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FooterSocialLinks />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 5, width: '30%' }}>
        <Grid container spacing={1} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={12}>
            <Box sx={{ width: { xs: '100%', md: 360 } }}>
              <Typography variant='subtitle1' sx={{ letterSpacing: 1, mb: 2 }}>
                Copyright © 2014 - 2024 Education House Leeds
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer