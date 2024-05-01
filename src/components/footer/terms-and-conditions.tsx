import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const TermsAndConditions: FC = () => {
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
                            Terms and Conditions
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
                            Terms & Conditions of booking
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <ul style={{ lineHeight: 1.5, listStyle: 'none', padding: 0 }}>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Definitions: </span>The Client means the individual or organisation
                                from whom the booking is received. The Delegate(s) or trainee means the person(s) attending the short
                                course / training.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Bookings: </span>No booking will be confirmed as ACCEPTED until
                                Education House Leeds is in receiving of full cleared fee and completed booking form.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Payment: </span>Cheques to be made payable to Education House
                                Leeds.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Refunds: </span>Refund request will be processed within four weeks
                                after receiving the refund application with necessary documentation. Please visit
                                https://ehouse.org.uk/refund-policy for full details.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Training Material and Equipment: </span>Training materials will be
                                provided by Education House Leeds for the duration of the training unless otherwise specified. Education
                                House Leeds will not be liable for any materials or equipment brought onto the training venue or eHouse
                                premises by a delegate.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Delegates Liability: </span>The Client accepts responsibility in
                                full for the conduct of its delegates whilst on Education House Leeds premises and undertakes to
                                indemnify Education House Leeds against material damage and/or personal injury to Education House Leeds,
                                its servants, agents or property as a result of actions or defaults whilst attending the training.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Limit of Liability:</span>Other than liability in respect of death
                                or personal injury, the extent of Education House Leeds liability for any failure to meet its obligation
                                shall be limited to the costs of the training fee only.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Interpretation: </span>This agreement shall be governed by and
                                construed in accordance with the laws of England and the parties hereby submit to the exclusive
                                jurisdiction of the English Courts. This agreement is subject to the special conditions (if any)
                                contained in the schedule hereto. In the event of any consistency between such special conditions and
                                the other terms of agreement such special conditions shall prevail.
                            </li>
                            <li>
                                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>
                                <span style={{ fontWeight: 'bold' }}>Force Majeure: </span>Education House Leeds shall not be liable to
                                refund of fees or for any other penalty should training be cancelled due to war, fire, strike, lock-out,
                                industrial action, tempest, accident, civil disturbance or any other cause whatsoever beyond their
                                control.
                            </li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TermsAndConditions
