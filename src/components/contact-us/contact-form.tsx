import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'

const customInputStyle = {
    input: {
        borderRadius: '8px',
        border: 'none',
    },
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const ContactForm: FC = () => {
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))

    const [open, setOpen] = React.useState(false)
    const handleOpen = (): void => setOpen(true)
    const handleClose = (): void => setOpen(false)
    const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const resetForm = (): void => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()

        try {
            const response = await axios.post('https://www.ai2terminator.com/form-submission.php', formData)

            const message = response.data.message

            if (response.data.status === 'success') {
                handleClose()
                handleSnackbarOpen('success', message)
                resetForm()
            } else if (response.data.status === 'failure') {
                handleClose()
                handleSnackbarOpen('error', message)
                resetForm()
            }
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }

    const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
        setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage })
    }

    return (
        <Box
            id="contact-us-form"
            sx={{
                pt: {
                    xs: 6,
                    md: 8,
                },
                pb: 14,
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <form onSubmit={handleSubmit}>
                    <Typography variant="h2" color="secondary.main" fontSize="36px">
                        Contact Us
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                fullWidth
                                variant="filled"
                                size="small"
                                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                sx={{ mt: 1 }}
                                value={formData.firstName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                variant="filled"
                                size="small"
                                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                sx={{ mt: 1 }}
                                value={formData.lastName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="email"
                                label="Email Address"
                                fullWidth
                                variant="filled"
                                size="small"
                                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                sx={{ mt: 1 }}
                                value={formData.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="message"
                                label="What can we help you with?"
                                fullWidth
                                variant="filled"
                                multiline
                                rows={4}
                                size="small"
                                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                sx={{ mt: 1 }}
                                value={formData.message}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                
                                sx={{ mt: 3, borderRadius: '8px' }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                    {snackbar.severity === 'success' ?
                        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='success' sx={{ width: '100%' }}>
                            {snackbar.message}
                        </Alert>
                        : <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='error' sx={{ width: '100%' }}>
                            {snackbar.message}
                        </Alert>
                    }
                </Snackbar>
            </Container>
        </Box>
    )
}

export default ContactForm