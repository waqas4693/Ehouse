import React, { FC, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import BasicCourseCardItem from '@/components/course/basic-course-card-item'

import { data as englishData } from '@/components/courses-page/courses-english-language.data';
import { data as businessData } from '@/components/courses-page/courses-business-management.data';
import { data as lifeSkillsData } from '@/components/courses-page/courses-life-skills-citizenship-test.data';
import { data as onlineData } from '@/components/courses-page/courses-online.data';

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

const HomePopularCourse: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const [activeCourseType, setActiveCourseType] = useState('English Language Courses')

  let activeData;

  switch (activeCourseType) {
    case 'English Language Courses':
      activeData = englishData;
      break;
    case 'Business Management Training':
      activeData = businessData;
      break;
    case 'Life Skills And UK Citizenship Test Preparation':
      activeData = lifeSkillsData;
      break;
    case 'Online Courses':
      activeData = onlineData;
      break;
    default:
      activeData = englishData;
  }

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

  // return (
  //   <Box
  //     id="popular-course"
  //     sx={{
  //       pt: {
  //         xs: 6,
  //         md: 8,
  //       },
  //       pb: 14,
  //       backgroundColor: 'background.default',
  //     }}
  //   >
  //     <Container maxWidth="lg">
  //       <Grid container spacing={2}>
  //         <Grid item xs={12} md={3}>
  //           <Box
  //             sx={{
  //               height: '100%',
  //               width: { xs: '100%', md: '90%' },
  //               display: 'flex',
  //               alignItems: 'center',
  //               justifyContent: { xs: 'center', md: 'flex-start' },
  //             }}
  //           >
  //             <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
  //               Most Popular Courses
  //             </Typography>
  //           </Box>
  //         </Grid>

  //         <Grid item xs={12} md={9}>
  //           <Slider {...sliderConfig}>
  //             {data.map((item) => (
  //               <CourseCardItem key={String(item.id)} item={item} />
  //             ))}
  //           </Slider>
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </Box>
  // )

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <ButtonGroup variant="contained" color="primary">
          <Button
            onClick={() => setActiveCourseType('English Language Courses')}
            disabled={activeCourseType === 'English Language Courses'}
            sx={{
              backgroundColor: activeCourseType === 'English Language Courses' ? 'secondary.main' : 'primary.main',
              '&.Mui-disabled': {
                backgroundColor: activeCourseType === 'English Language Courses' ? 'secondary.main' : 'primary.light',
                color: 'white',
              }
            }}
          >
            English Language Courses
          </Button>
          <Button
            onClick={() => setActiveCourseType('Business Management Training')}
            disabled={activeCourseType === 'Business Management Training'}
            sx={{
              backgroundColor: activeCourseType === 'Business Management Training' ? 'secondary.main' : 'primary.main',
              '&.Mui-disabled': {
                backgroundColor: activeCourseType === 'Business Management Training' ? 'secondary.main' : 'primary.light',
                color: 'white',
              }
            }}
          >
            Business Management Training
          </Button>
          <Button
            onClick={() => setActiveCourseType('Life Skills And UK Citizenship Test Preparation')}
            disabled={activeCourseType === 'Life Skills And UK Citizenship Test Preparation'}
            sx={{
              backgroundColor: activeCourseType === 'Life Skills And UK Citizenship Test Preparation' ? 'secondary.main' : 'primary.main',
              '&.Mui-disabled': {
                backgroundColor: activeCourseType === 'Life Skills And UK Citizenship Test Preparation' ? 'secondary.main' : 'primary.light',
                color: 'white',
              }
            }}
          >
            Life Skills And UK Citizenship Test Preparation
          </Button>
          <Button
            onClick={() => setActiveCourseType('Online Courses')}
            disabled={activeCourseType === 'Online Courses'}
            sx={{
              backgroundColor: activeCourseType === 'Online Courses' ? 'secondary.main' : 'primary.main',
              '&.Mui-disabled': {
                backgroundColor: activeCourseType === 'Online Courses' ? 'secondary.main' : 'primary.light',
                color: 'white',
              }
            }}
          >
            Online Courses
          </Button>
        </ButtonGroup>
      </Box>

      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={3}>
          <Box
            sx={{
              height: '100%',
              width: { xs: '100%', md: '90%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
              {activeCourseType}
            </Typography>
          </Box>
        </Grid> */}

        <Grid item xs={12} md={12}>
          <Slider {...sliderConfig}>
            {activeData.map((item) => (
              <BasicCourseCardItem key={String(item.id)} item={item} />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePopularCourse