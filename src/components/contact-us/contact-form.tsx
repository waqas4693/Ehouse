// import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
// import MuiAlert, { AlertProps } from '@mui/material/Alert'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Container from '@mui/material/Container'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Snackbar from '@mui/material/Snackbar'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YoutubeIcon from '@mui/icons-material/YouTube';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import Link from '@mui/material/Link';
// import axios from 'axios'
// import Typography from '@mui/material/Typography'
// import { useTheme } from '@mui/material/styles'
// import { useMediaQuery } from '@mui/material'

// const customInputStyle = {
//     input: {
//         borderRadius: '8px',
//         border: 'none',
//     },
// }

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
// })

// const ContactForm: FC = () => {
//     const { breakpoints } = useTheme()
//     const matchMobileView = useMediaQuery(breakpoints.down('md'))

//     const [open, setOpen] = React.useState(false)
//     const handleOpen = (): void => setOpen(true)
//     const handleClose = (): void => setOpen(false)
//     const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: ''
//     })

//     const resetForm = (): void => {
//         setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             message: ''
//         })
//     }

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
//         const { name, value } = e.target
//         setFormData(prevData => ({ ...prevData, [name]: value }))
//     }

//     const handleSubmit = async (e: FormEvent): Promise<void> => {
//         e.preventDefault()

//         try {
//             const response = await axios.post('https://admin.ehouse.org.uk/contact-us-form.php', formData)
//             const message = response.data.message

//             if (response.data.status === 'success') {
//                 handleClose()
//                 handleSnackbarOpen('success', message)
//                 resetForm()
//             } else if (response.data.status === 'failure') {
//                 handleClose()
//                 handleSnackbarOpen('error', message)
//                 resetForm()
//             }
//         } catch (error) {
//             console.error('Error submitting the form:', error)
//         }
//     }

//     const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
//         setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage })
//     }

//     return (
//         <Box>
//             <Box sx={{ px: 10, py: 5 }}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={8}>
//                         <Box sx={{ mb: 2 }}>
//                             <Typography
//                                 variant="h2"
//                                 sx={{
//                                     position: 'relative',
//                                     color: 'secondary.main',
//                                     fontSize: { xs: 15, md: 36 },
//                                     letterSpacing: 1.5,
//                                     fontWeight: 'bold',
//                                     lineHeight: 1.3,
//                                 }}
//                             >
//                                 Contact Us
//                             </Typography>
//                         </Box>

//                         <Box sx={{ mb: 2 }}>
//                             <Typography
//                                 variant="h2"
//                                 sx={{
//                                     position: 'relative',
//                                     color: 'black',
//                                     fontSize: { xs: 15, md: 24 },
//                                     letterSpacing: 1.5,
//                                     fontWeight: 'bold',
//                                     lineHeight: 1.3,
//                                 }}
//                             >
//                                 Get in Touch
//                             </Typography>
//                         </Box>

//                         <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
//                             <img src="/images/icons/location.svg" alt="Image" style={{ width: '30px', marginRight: '15px' }} />
//                             <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
//                                 5 - 11 Hares ViewLeeds, LS8 4LHUK
//                             </Typography>
//                         </Box>

//                         <Box sx={{ mb: 3, display: 'flex', alignItems: 'start' }}>
//                             <img src="/images/icons/phone.svg" alt="Image" style={{ width: '30px', marginRight: '15px' }} />
//                             <Typography sx={{ fontSize: '16px', display: 'flex', flexDirection: 'column' }} variant="body1">
//                                 <b>Phone:</b> +44 (0) 7455 222 161 <br />
//                                 <b>Phone:</b> +44 (0) 113 322 6557 <br />
//                                 <b>Email:</b> info@ehouse.org.uk <br /><br />
//                                 <b>Follow Us:</b>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
//                                     <Link href="https://www.instagram.com/educationhouseleeds/" target="_blank" rel="noopener noreferrer">
//                                         <InstagramIcon sx={{ color: 'secondary.main' }} />
//                                     </Link>
//                                     <Link href="https://www.facebook.com/Training4Biz/?view_public_for=133224183810380" target="_blank" rel="noopener noreferrer">
//                                         <FacebookIcon sx={{ color: 'secondary.main' }} />
//                                     </Link>
//                                     <Link href="https://www.linkedin.com/company/educationhouseleeds/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
//                                         <LinkedInIcon sx={{ color: 'secondary.main' }} />
//                                     </Link>
//                                     <Link href="https://www.youtube.com/channel/UCInCkv901I2a_oYONAbgVbQ" target="_blank" rel="noopener noreferrer">
//                                         <YoutubeIcon sx={{ color: 'secondary.main' }} />
//                                     </Link>
//                                     <Link href="https://www.pinterest.co.uk/educationhouseleeds/" target="_blank" rel="noopener noreferrer">
//                                         <PinterestIcon sx={{ color: 'secondary.main' }} />
//                                     </Link>
//                                 </Box>
//                             </Typography>
//                         </Box>

//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <img src="/images/contact_us.svg" alt="Image" style={{ width: '100%' }} />
//                     </Grid>
//                 </Grid>
//             </Box>

//             <Box
//                 id="contact-us-form"
//                 sx={{
//                     pt: {
//                         xs: 6,
//                         md: 8,
//                     },
//                     pb: 14,
//                     px: 10,
//                     backgroundColor: 'white',
//                 }}
//             >
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={6}>
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.507716733784!2d-1.5253290232755128!3d53.81604297242934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795b8a59967569%3A0x501778685c752dec!2s11%20Hares%20View%2C%20Harehills%2C%20Leeds%20LS8%204LH%2C%20UK!5e0!3m2!1sen!2sus!4v1698858884459!5m2!1sen!2sus" width="600" height="450" style={{ border: '0' }}></iframe>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         {/* <Container maxWidth="lg">
//                             <form onSubmit={handleSubmit}>
//                                 <Typography variant="h2" color="secondary.main" fontSize="36px">
//                                     Contact Us
//                                 </Typography>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} md={6}>
//                                         <TextField
//                                             name="firstName"
//                                             label="First Name"
//                                             fullWidth
//                                             variant="filled"
//                                             size="small"
//                                             InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                                             sx={{ mt: 1 }}
//                                             value={formData.firstName}
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} md={6}>
//                                         <TextField
//                                             name="lastName"
//                                             label="Last Name"
//                                             fullWidth
//                                             variant="filled"
//                                             size="small"
//                                             InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                                             sx={{ mt: 1 }}
//                                             value={formData.lastName}
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} md={12}>
//                                         <TextField
//                                             name="email"
//                                             label="Email Address"
//                                             fullWidth
//                                             variant="filled"
//                                             size="small"
//                                             InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                                             sx={{ mt: 1 }}
//                                             value={formData.email}
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} md={12}>
//                                         <TextField
//                                             name="message"
//                                             label="What can we help you with?"
//                                             fullWidth
//                                             variant="filled"
//                                             multiline
//                                             rows={4}
//                                             size="small"
//                                             InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                                             sx={{ mt: 1 }}
//                                             value={formData.message}
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Button
//                                             type="submit"
//                                             variant="contained"
//                                             color="secondary"
//                                             sx={{ mt: 3, borderRadius: '8px' }}
//                                         >
//                                             Submit
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </form>
//                             <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
//                                 {snackbar.severity === 'success' ?
//                                     <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='success' sx={{ width: '100%' }}>
//                                         {snackbar.message}
//                                     </Alert>
//                                     : <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='error' sx={{ width: '100%' }}>
//                                         {snackbar.message}
//                                     </Alert>
//                                 }
//                             </Snackbar>
//                         </Container> */}

//                         <Container maxWidth="lg">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Typography variant="h2" color="secondary.main" fontSize="36px">
//             Contact Us
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 {...register('firstName', { required: 'First Name is required' })}
//                 label="First Name"
//                 fullWidth
//                 variant="filled"
//                 size="small"
//                 InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                 sx={{ mt: 1 }}
//               />
//               <span>{errors.firstName?.message}</span>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 {...register('lastName', { required: 'Last Name is required' })}
//                 label="Last Name"
//                 fullWidth
//                 variant="filled"
//                 size="small"
//                 InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                 sx={{ mt: 1 }}
//               />
//               <span>{errors.lastName?.message}</span>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <TextField
//                 {...register('email', {
//                   required: 'Email is required',
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                     message: 'Invalid email address',
//                   },
//                 })}
//                 label="Email Address"
//                 fullWidth
//                 variant="filled"
//                 size="small"
//                 InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                 sx={{ mt: 1 }}
//               />
//               <span>{errors.email?.message}</span>
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <TextField
//                 {...register('message', { required: 'Message is required' })}
//                 label="What can we help you with?"
//                 fullWidth
//                 variant="filled"
//                 multiline
//                 rows={4}
//                 size="small"
//                 InputProps={{ disableUnderline: true, style: customInputStyle.input }}
//                 sx={{ mt: 1 }}
//               />
//               <span>{errors.message?.message}</span>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="secondary"
//                 sx={{ mt: 3, borderRadius: '8px' }}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
//           {snackbar.severity === 'success' ?
//             <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='success' sx={{ width: '100%' }}>
//               {snackbar.message}
//             </Alert>
//             : <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='error' sx={{ width: '100%' }}>
//               {snackbar.message}
//             </Alert>
//           }
//         </Snackbar>
//       </Container>
//                     </Grid>
//                 </Grid>

//             </Box>
//             <Box sx={{ backgroundColor: '#fff' }}>
//                 <Grid container sx={{ px: 10, py: 7 }}>
//                     <Grid item xs={12} md={6}>

//                         <Box sx={{}}>
//                             <Typography
//                                 variant="h2"
//                                 sx={{
//                                     position: 'relative',
//                                     color: 'secondary.main',
//                                     fontSize: { xs: 15, md: 36 },
//                                     letterSpacing: 1.5,
//                                     fontWeight: 'bold',
//                                     lineHeight: 1.3,
//                                 }}
//                             >
//                                 Reach out to us
//                             </Typography>
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                         <Box sx={{ alignItems: 'center', display: 'flex', float: 'right' }}>
//                             <img src="/images/whatsapp.svg" alt="Image" style={{ width: '50px', marginRight: '15px' }} />
//                             <Typography
//                                 variant="h2"
//                                 sx={{
//                                     position: 'relative',
//                                     color: 'black',
//                                     fontSize: { xs: 15, md: 28 },
//                                     letterSpacing: 1.5,
//                                     fontWeight: 'normal',
//                                     lineHeight: 1.3,
//                                 }}
//                             >
//                                 +447455 222161
//                             </Typography>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Box>
//     )
// }

// export default ContactForm



import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from '@mui/material/Link';
import axios from 'axios'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { useForm } from 'react-hook-form';

const customInputStyle = {
    input: {
        borderRadius: '8px',
        border: 'none',
    },
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const ContactForm: FC = () => {
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
    const onSubmit = async (data: FormData): Promise<void> => {
        try {
            const response = await axios.post('https://admin.ehouse.org.uk/contact-us-form.php', data)
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
    };

    const [open, setOpen] = React.useState(false)
    const handleOpen = (): void => setOpen(true)
    const handleClose = (): void => setOpen(false)
    const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })

    const [formData, setFormData] = useState<FormData>({
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

    const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
        setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage })
    }

    return (
        <Box>
            <Box sx={{ px: 10, py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
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
                                Contact Us
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    position: 'relative',
                                    color: 'black',
                                    fontSize: { xs: 15, md: 24 },
                                    letterSpacing: 1.5,
                                    fontWeight: 'bold',
                                    lineHeight: 1.3,
                                }}
                            >
                                Get in Touch
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                            <img src="/images/icons/location.svg" alt="Image" style={{ width: '30px', marginRight: '15px' }} />
                            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                                5 - 11 Hares ViewLeeds, LS8 4LHUK
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 3, display: 'flex', alignItems: 'start' }}>
                            <img src="/images/icons/phone.svg" alt="Image" style={{ width: '30px', marginRight: '15px' }} />
                            <Typography sx={{ fontSize: '16px', display: 'flex', flexDirection: 'column' }} variant="body1">
                                <b>Phone:</b> +44 (0) 7455 222 161 <br />
                                <b>Phone:</b> +44 (0) 113 322 6557 <br />
                                <b>Email:</b> info@ehouse.org.uk <br /><br />
                                <b>Follow Us:</b>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                                    <Link href="https://www.instagram.com/educationhouseleeds/" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon sx={{ color: 'secondary.main' }} />
                                    </Link>
                                    <Link href="https://www.facebook.com/Training4Biz/?view_public_for=133224183810380" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon sx={{ color: 'secondary.main' }} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/educationhouseleeds/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon sx={{ color: 'secondary.main' }} />
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCInCkv901I2a_oYONAbgVbQ" target="_blank" rel="noopener noreferrer">
                                        <YoutubeIcon sx={{ color: 'secondary.main' }} />
                                    </Link>
                                    <Link href="https://www.pinterest.co.uk/educationhouseleeds/" target="_blank" rel="noopener noreferrer">
                                        <PinterestIcon sx={{ color: 'secondary.main' }} />
                                    </Link>
                                </Box>
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src="/images/contact_us.svg" alt="Image" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>

            <Box
                id="contact-us-form"
                sx={{
                    pt: {
                        xs: 6,
                        md: 8,
                    },
                    pb: 14,
                    px: 10,
                    backgroundColor: 'white',
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src='/images/map-image.png' alt='Map' style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.507716733784!2d-1.5253290232755128!3d53.81604297242934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795b8a59967569%3A0x501778685c752dec!2s11%20Hares%20View%2C%20Harehills%2C%20Leeds%20LS8%204LH%2C%20UK!5e0!3m2!1sen!2sus!4v1698858884459!5m2!1sen!2sus" width="600" height="450" style={{ border: '0' }}></iframe> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <Container maxWidth="lg">
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
                        </Container> */}

                        <Container maxWidth="lg">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant="h2" color="secondary.main" fontSize="36px">
                                    Contact Us
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            {...register('firstName', { required: 'First Name is required' })}
                                            label="First Name"
                                            fullWidth
                                            variant="filled"
                                            size="small"
                                            InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                            sx={{ mt: 1 }}
                                        />
                                        <span>{errors.firstName?.message}</span>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            {...register('lastName', { required: 'Last Name is required' })}
                                            label="Last Name"
                                            fullWidth
                                            variant="filled"
                                            size="small"
                                            InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                            sx={{ mt: 1 }}
                                        />
                                        <span>{errors.lastName?.message}</span>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            label="Email Address"
                                            fullWidth
                                            variant="filled"
                                            size="small"
                                            InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                            sx={{ mt: 1 }}
                                        />
                                        <span>{errors.email?.message}</span>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            {...register('message', { required: 'Message is required' })}
                                            label="What can we help you with?"
                                            fullWidth
                                            variant="filled"
                                            multiline
                                            rows={4}
                                            size="small"
                                            InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                                            sx={{ mt: 1 }}
                                        />
                                        <span>{errors.message?.message}</span>
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
                        <Box sx={{ alignItems: 'center', display: 'flex', float: 'right' }}>
                            <img src="/images/whatsapp.svg" alt="Image" style={{ width: '50px', marginRight: '15px' }} />
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

export default ContactForm
