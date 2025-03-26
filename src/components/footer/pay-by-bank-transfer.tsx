import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const PayByBankTransfer: FC = () => {
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
                            Pay By Bank Transfer
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
                            Payment By Bank Transfer
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Bank Transfers Payments should be made in UK Pounds Sterling to:
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Account holder: Education House Leeds Ltd
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Bank: HSBC
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            IBAN:GB87HBUK40271595067413
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            SWIFT: HBUKGB4B
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Account No: 95067413
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Sort Code: 40-27-15
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Branch address: PO Box 105
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            33 Park Row
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            West Yorkshire
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            Leeds
                        </Typography>

                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant='body1'>
                            LS1 1LD
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PayByBankTransfer
