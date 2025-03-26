import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Vacancies: FC = () => {
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
              Vacancies
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant='h3'
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Receptionist
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant='body1'>
              A voluntary receptionist is required for an Education Training Provider in Leeds.
            </Typography>

            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant='body1'>
              We are looking for an individual with a polite telephone manner who can assist in general office
              administration, writing emails and giving information to our clients in person. Previous experience is not
              necessary in this role, as full training will be provided.
            </Typography>

            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant='body1'>
              This part-time role is on a voluntary basis with flexible hours according to your availability. We will
              reimburse any travel expenses for this position. You will be working closely with our existing staff to
              assist them in their daily activities.
            </Typography>

            <Typography
              variant='h3'
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              THE ROLE WILL INCLUDE:
            </Typography>

            <ul style={{ lineHeight: 1, listStyle: 'none', padding: 0 }}>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Assisting clients
                in person, by email and on the phone
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Typing letters
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Updating records
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Taking accurate
                messages from phone enquiries
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Knowledge of
                Microsoft office, writing emails
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>General office
                administration
              </li>
            </ul>

            <Typography
              variant='h3'
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              THE INDIVIDUAL SHOULD HAVE:
            </Typography>

            <ul style={{ lineHeight: 1, listStyle: 'none', padding: 0 }}>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Excellent spoken
                and written English skills
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Polite and
                confident telephone manner
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Professional
                attitude with a good work ethic
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Professional
                attitude with a good work ethic
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Skills in
                multitasking
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Teamwork skills
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Ability to work
                on their own
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Enthusiasm and
                willingness to learn
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Basic IT skills
              </li>
            </ul>

            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
              Please apply by email to info@ehouse.org.uk with a covering letter and CV.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Vacancies
