import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider, { Settings } from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import axios from 'axios';
import { useTheme, styled } from '@mui/material/styles';
import { IconButton, useMediaQuery } from '@mui/material';

import { data } from './course.data';
import { CourseCardItem } from '@/components/course';

interface SliderArrowArrow {
  onClick?: () => void;
  type: 'next' | 'prev';
  className?: 'string';
}

const SliderArrow: FC<SliderArrowArrow> = props => {
  const { onClick, type, className } = props;
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
      color='inherit'
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

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
}));

const customInputStyle = {
  input: {
    borderRadius: '8px',
    border: 'none',
  },
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

Alert.displayName = 'Alert';


const HomeCourse: FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    selectedCourse: '',
    acceptTerms: false, // Added acceptTerms for checkbox
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    checkbox: '', // Error message for the checkbox
  });

  const resetForm = (): void => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      selectedCourse: '',
      acceptTerms: false,
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      checkbox: '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: checked }));
  };

  const validateForm = (): boolean => {
    let isValid = true;

    if (!formData.firstName) {
      setErrors(prevErrors => ({
        ...prevErrors,
        firstName: 'Please enter your first name.',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        firstName: '',
      }));
    }

    if (!formData.lastName) {
      setErrors(prevErrors => ({
        ...prevErrors,
        lastName: 'Please enter your last name.',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        lastName: '',
      }));
    }

    if (!formData.email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter your email.',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: '',
      }));
    }

    if (!formData.contactNo) {
      setErrors(prevErrors => ({
        ...prevErrors,
        contactNo: 'Please enter your contact number.',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        contactNo: '',
      }));
    }

    if (!formData.acceptTerms) {
      setErrors(prevErrors => ({
        ...prevErrors,
        checkbox: 'Terms and Conditions not accepted',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        checkbox: '',
      }));
    }

    console.log("Form Is Valid = ");
    console.log(isValid);

    return isValid;
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    console.log("Form submittion started");

    if (validateForm()) {
      console.log("Form validated");
      try {
        const response = await axios.post('https://www.ai2terminator.com/form-submission.php', formData);

        const message = response.data.message;

        if (response.data.status === 'success') {
          handleClose();
          handleSnackbarOpen('success', message);
          resetForm();
        } else if (response.data.status === 'failure') {
          handleClose();
          handleSnackbarOpen('error', message);
          resetForm();
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  };

  const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
    setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage });
  };

  const handleSelectCourse = (courseName: string): void => {
    setSelectedCourse(courseName);
    formData.selectedCourse = courseName;
    handleOpen();
  };

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
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
  };

  const missionStatementPoints = [
    { text: 'To ensure that our teachers are committed to creating a stimulating, supportive and active learning environment in which students can make rapid progress.' },
    { text: 'To create an atmosphere of tolerance and respect and to help students learn from not just the teachers but also from each other.' },
    { text: 'To be kind, patient, supportive and attentive to our students and to ask for, and listen to their views and comments and, where possible, to act upon their suggestions, as they are the most important people in and every member of staff is here to help them get the most out of their learning journey with us.' },
  ]

  return (
    <Box
      id='popular-course'
      sx={{
        pt: {
          xs: 5,
          md: 7,
        },
        pb: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            height: '100%',
            width: { xs: '100%' },
            alignItems: 'center',
            justifyContent: { xs: 'center' },
            my: 3,
          }}
        >
          <Typography variant='body1' sx={{ mb: 2 }}>
            Welcome to Education House Leeds – the place where language learning comes alive! We&apos;re not your typical college; we&apos;re a close-knit community that believes in the magic of mastering English. Here at Education House Leeds, our teachers aren&apos;t just educators; they&apos;re mentors who genuinely care about your progress. We keep our classes small so that you get the attention you deserve, making learning feel like a personalised adventure.
          </Typography>
          <Typography variant='body1' sx={{ my: 2 }}>
            Whether you&apos;re prepping for your academic journey, aiming for career growth, or just looking to conquer those language exams, our programs are designed to meet your unique needs. Imagine studying with students from all corners of the world, sharing stories and experiences that enrich your learning beyond the classroom.
          </Typography>
          <Typography variant='h4' sx={{ my: 2, color: 'secondary.main' }}>
            Mission Statement
          </Typography>
          <Typography variant='body1' sx={{ mt: 2, mb: 1 }}>
            Our mission is to provide high quality education in the English language for students aged 18+,
            focussing on teaching General English and preparing students successfully for the IELTS
            examinations.
          </Typography>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {missionStatementPoints.map((item, index) => (
              <li key={index}>
                <Typography variant='body1'>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>
                  {item.text}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
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
              <Typography variant='h2' sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 20, md: 38 } }}>
                English Language Courses
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Slider {...sliderConfig}>
              {data.map(item => (
                <CourseCardItem
                  key={String(item.id)}
                  item={item}
                  onRegisterClick={() => handleSelectCourse(item.title)}
                />
              ))}
            </Slider>
          </Grid>
        </Grid>
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
          {/* {Object.values(errors).every(value => !value) && (
            <>
              <Typography variant='h2' align='center' color='secondary.main' fontSize='48px'>
                Admission Form!
              </Typography>
              <Typography align='center' sx={{ mt: 1, fontSize: '20px', color: '#232323' }}>
                Please fill in the form below
              </Typography>
            </>
          )} */}
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
                error={!!errors.firstName}
                helperText={errors.firstName}
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
                error={!!errors.lastName}
                helperText={errors.lastName}
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
                error={!!errors.email}
                helperText={errors.email}
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
                error={!!errors.contactNo}
                helperText={errors.contactNo}
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
                  name='acceptTerms'
                  checked={formData.acceptTerms}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                />
                By submitting this form you agree to our Terms and Conditions
                {errors.checkbox && <span style={{ color: 'red' }}>{errors.checkbox}</span>}
              </Typography>
            </Box>
            <Button type='submit' variant='contained' color='secondary' fullWidth sx={{ mt: 3, borderRadius: '8px' }}>
              Register Now
            </Button>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
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
  );
};

export default HomeCourse