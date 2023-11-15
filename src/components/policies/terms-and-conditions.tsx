import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const TermsAndConditions: FC = () => {
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
                Terms & Conditions
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Please read the Terms and Conditions of participation in the activities of Education House Leeds.
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
                Short Term Study VISAS
              </Typography>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Training / course can’t be changed for which Short term study visa was obtained.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Training / course deferral’s request will be on the discretion of ehouse.
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
                Fee
              </Typography>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>All due fees must be paid in full before receiving Acceptance Letter for ST Study visa. Failure to make payment on time will result in an automatic cancellation.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Training / course fee may be changed without prior notification.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Training / course fees do NOT include:

                  <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, marginLeft: '1.30em' }}>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Travelling and accommodation.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Social programmes or tickets for external events.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Registration fees with awarding bodies
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>External examination fees.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Personal and health insurance.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Bank charges on international money transfers.
                    </li>
                  </ul>
                </li>

                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Training / course fees include:

                  <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, marginLeft: '1.30em' }}>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Cost of tuition.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Course material (in hard copy and digital formats).
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Pre-arrival documentation including support letters for visa applications.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Welcome packs.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Internet access.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Accredited course certificates.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Course photographs.
                    </li>
                  </ul>
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
                Refund
              </Typography>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Refund claims mustsupported giving thereason for visa refusaltogether with documentary evidence (original visa refusal letter, etc.).
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Refund request will be processed within four weeks of receiving the refund application with necessary documentation.
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
                Alterations
              </Typography>
            </Box>


            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Training contents may be varied at the discretion of Education House Leeds. Every effort will be made to inform all students / participants in advance of any significant
                changes. If for any reason training has to be cancelled Education House Leeds reserves the right to offer suitable alternative
              </Typography>

              <Typography sx={{ lineHeight: 1.6, fontSize: '16px', marginTop: '15px' }} variant="body1">
                Education House Leeds reserves the right to amend, change or cancel the training published on website / marketing material and offer an alternative date, place and
                training.
              </Typography>
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

export default TermsAndConditions