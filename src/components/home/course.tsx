import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Snackbar from '@mui/material/Snackbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'

import { data } from './course.data'
import { CourseCardItem } from '@/components/course'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
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

const customInputStyle = {
  input: {
    borderRadius: '8px',
    border: 'none',
  },
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const HomeCourse: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    selectedCourse: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('https://www.ai2terminator.com/form-submission.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbarOpen(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const [selectedCourse, setSelectedCourse] = useState<string>(''); // Initialize selectedCourse state

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
    handleOpen();
  };
  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="popular-course"
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h2" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 20, md: 38 } }}>
                English Language Courses
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <CourseCardItem key={String(item.id)} item={item} onRegisterClick={() => handleSelectCourse(item.title)} />
              ))}
            </Slider>
          </Grid>
        </Grid>

      </Container>
      <Modal
        aria-labelledby="register-now-modal-title"
        aria-describedby="register-now-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      // slots={{ backdrop: Backdrop }}
      // slotProps={{
      //   backdrop: {
      //     timeout: 500,
      //   },
      // }}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'common.white',
          borderRadius: '35px',
          boxShadow: 24,
          px: 10,
          py: 5
        }}>
          <Typography variant="h2" align="center" color="secondary.main" fontSize="48px">
            Registration Form!
          </Typography>
          <Typography align="center" sx={{ mt: 1, fontSize: '20px', color: '#232323' }}>
            Enroll yourself to access this course.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={customInputStyle}>
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
              <TextField
                name="email"
                label="Email"
                fullWidth
                variant="filled"
                size="small"
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name="contactNo"
                label="Contact Number"
                fullWidth
                variant="filled"
                size="small"
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={formData.contactNo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
              <TextField
                name="selectedCourse"
                label="Selected Course"
                fullWidth
                variant="filled"
                size="small"
                InputProps={{ disableUnderline: true, style: customInputStyle.input }}
                sx={{ mt: 1 }}
                value={selectedCourse}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 3, borderRadius: '8px' }}
            >
              Register Now
            </Button>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Success! Your form has been submitted.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default HomeCourse