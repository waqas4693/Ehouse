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
        checkbox: 'Please accept the Terms and Conditions.',
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        checkbox: '',
      }));
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (validateForm()) {
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

  return (
    <Box
      id='popular-course'
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth='lg'>
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