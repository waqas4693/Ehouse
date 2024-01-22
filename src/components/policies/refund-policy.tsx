import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const RefundPolicy: FC = () => {
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
                Refund Policy
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Refund Policy For Short Term Study Visa & Short-Term Study Visa
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
                Please Note
              </Typography>
            </Box>

            <Box sx={{ mb: 2, borderRadius: '10px' }}>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0 }}>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Refund claims must be supported by the reason for the refusal of a visa with documentary evidence (original visa refusal letter, etc.)
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Refund request will be processed within 4 weeks after receiving the refund application with necessary documentation.
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
                No Refund Situations
              </Typography>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If training cancelled by the participant because of any reason.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If participant obtains a Visa, regardless of his / her travel or entry to UK.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If participant / student failure to prove guanine intention of training or study.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If training is not being attended for any reason after obtaining Visa.
                </li>
                <li>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If the application for a Visa is rejected as a result of an applicant’s own mistake in their application such as a failure to:

                  <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, marginLeft: '1.30em' }}>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Submit correct documentation.
                    </li>
                    <li>
                      <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Provide evidence of the required maintenance funds and etc.
                    </li>
                  </ul>

                  <li>
                    <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If new regulations or any event results in eHouse losing the ability to sponsor the participant and participant have got the Visa or has not applied Visa.
                  </li>
                  <li style={{ lineHeight: 1.5 }}>
                    <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If participant is found to have obtained a Visa by deception (for example, by submitting false documentation to eHouse / the British High Commission / Embassy )
                    and he/ she may be stopped taking training / course.
                  </li>
                  <li>
                    <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>If course or training is cancelled or stopped permanently by Education House Leeds because of National or International Crisis or Disaster.
                  </li>
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
                Cooling-Off Period: 2 Weeks
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                If a student or participant decides to cancel the course or training within the two-week cooling-off period that starts after the course fee payment, refund applicant will be eligible for a refund. The refund will be issued after deducting £300 for administrative charges and any applicable bank or other charges. It is important to note that this refund provision applies only if the student or participant has not applied for a UK Visa using the eHouse visa letter during this period.
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
                Other Terms
              </Typography>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Registration fee paid is not refundable.
                </li>
                <li >
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Course or training fee is not transferable to any other participant.
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

export default RefundPolicy