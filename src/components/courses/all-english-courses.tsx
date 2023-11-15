import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Slider, { Settings } from 'react-slick'
import { useTheme, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import DescriptiveCourseCardItem from '@/components/course/descriptive-course-card-item'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Checkbox from '@mui/material/Checkbox' 
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import axios from 'axios'
import { data } from './all-english-courses.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = props => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color='inherit'
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})
Alert.displayName = 'Alert'

const customInputStyle = {
  input: {
    borderRadius: '8px',
    border: 'none',
  },
}

const AllEnglishCourses: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const [open, setOpen] = React.useState(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })
  const [selectedCourse, setSelectedCourse] = useState<string>('')

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type='prev' />,
    nextArrow: <SliderArrow type='next' />,
    dots: true,
    appendDots: dots => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    selectedCourse: '',
  })

  const resetForm = (): void => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      selectedCourse: '',
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

  const handleSelectCourse = (courseName: string): void => {
    setSelectedCourse(courseName)
    formData.selectedCourse = courseName
    handleOpen()
  }

  return (
    <Box
      id='mentors'
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant='h1' sx={{ fontSize: 40, color: 'secondary.main' }}>
          Courses
        </Typography>
        <Slider {...sliderConfig}>
          {data.map(item => (
            <DescriptiveCourseCardItem
              key={String(item.id)}
              item={item}
              onRegisterClick={() => handleSelectCourse(item.title)}
            />
          ))}
        </Slider>
      </Container>
      <Modal
        aria-labelledby='register-now-modal-title'
        aria-describedby='register-now-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'common.white',
            borderRadius: '35px',
            boxShadow: 24,
            px: 10,
            py: 5,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              zIndex: 1,
            }}
          >
            <img
              src="/images/form-close-button.svg"
              alt="Close Button"
              style={{ cursor: 'pointer' }}
            />
          </IconButton>
          <Typography variant='h2' align='center' color='secondary.main' fontSize='48px'>
            Admission Form!
          </Typography>
          <Typography align='center' sx={{ mt: 1, fontSize: '20px', color: '#232323' }}>
          Please fill in the form below
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={customInputStyle}>
              <TextField
                name='firstName'
                label='First Name'
                fullWidth
                variant='filled'
                size='small'
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name='lastName'
                label='Last Name'
                fullWidth
                variant='filled'
                size='small'
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name='email'
                label='Email'
                fullWidth
                variant='filled'
                size='small'
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name='contactNo'
                label='Contact Number'
                fullWidth
                variant='filled'
                size='small'
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.contactNo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name='selectedCourse'
                label='Selected Course'
                fullWidth
                variant='filled'
                size='small'
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={selectedCourse}
              />
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
              >
                <Checkbox
                // Handle the checkbox state
                />
                By submitting this form you agree to our Terms and Conditions
              </Typography>
            </Box>
            <Button type='submit' variant='contained' color='secondary' fullWidth sx={{ mt: 3, borderRadius: '8px' }}>
              Register Now
            </Button>
          </form>
        </Box>
      </Modal>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        {snackbar.severity === 'success' ? (
          <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='success' sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        ) : (
          <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity='error' sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        )}
      </Snackbar>
    </Box>
  )
}

export default AllEnglishCourses