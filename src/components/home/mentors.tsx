import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'
import Grid from '@mui/material/Grid';

// interface SliderArrowArrow {
//   onClick?: () => void
//   type: 'next' | 'prev'
//   className?: 'string'
// }

const StyledVideo = styled('video')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 775
  }
}));

// const SliderArrow: FC<SliderArrowArrow> = (props) => {
//   const { onClick, type, className } = props
//   return (
//     <IconButton
//       sx={{
//         backgroundColor: 'background.paper',
//         color: 'primary.main',
//         '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
//         bottom: '-28px !important',
//         left: 'unset !important',
//         right: type === 'prev' ? '60px !important' : '0 !important',
//         zIndex: 10,
//         boxShadow: 1,
//       }}
//       disableRipple
//       color="inherit"
//       onClick={onClick}
//       className={className}
//     >
//       {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
//     </IconButton>
//   )
// }

// const StyledDots = styled('ul')(({ theme }) => ({
//   '&.slick-dots': {
//     position: 'absolute',
//     left: 0,
//     bottom: -20,
//     paddingLeft: theme.spacing(1),
//     textAlign: 'left',
//     '& li': {
//       marginRight: theme.spacing(2),
//       '&.slick-active>div': {
//         backgroundColor: theme.palette.primary.main,
//       },
//     },
//   },
// }))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  // const sliderConfig: Settings = {
  //   infinite: true,
  //   // autoplay: true,
  //   speed: 300,
  //   slidesToShow: matchMobileView ? 1 : 3,
  //   slidesToScroll: 1,
  //   prevArrow: <SliderArrow type="prev" />,
  //   nextArrow: <SliderArrow type="next" />,
  //   dots: true,
  //   appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  //   customPaging: () => (
  //     <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
  //   ),
  // }

  return (
    // <Box
    //   id="mentors"
    //   sx={{
    //     pt: {
    //       xs: 6,
    //       md: 8,
    //     },
    //     pb: {
    //       xs: 8,
    //       md: 12,
    //     },
    //     backgroundColor: '#ecf3f3',
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Typography variant="h1" sx={{ fontSize: 30 }}>
    //       Unlock Your Future: Master English with Education House Leeds
    //     </Typography>
    //     <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
    //       <StyledVideo controls>
    //         <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </StyledVideo>
    //     </Box>

    //   </Container>
    // </Box>
    <Box
      id="video-section"
      sx={{
        backgroundColor: '#ecf3f3',
        position: 'relative',
        pt: 4,
        pb: { xs: 8, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            {/* <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 30, md: 40 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
                mb: 4
              }}
            >
              Unlock Your Future: Master English with Education House Leeds
            </Typography>
          </Box> */}

            {/* <Box sx={{ mb: 3 }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 20, md: 41 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Unlock Your Future{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 24, md: 34 },
                      left: 2,
                      transform: 'rotate(3deg)',
                      '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                    }}
                  >
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
                Master English with Education House Leeds{' '}
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -16,
                      right: -21,
                      width: { xs: 22, md: 30 },
                      height: 'auto',
                    },
                  }}
                >

                  <svg version="1.1" viewBox="0 0 3183 3072">
                    <g id="Layer_x0020_1">
                      <path
                        fill="#007de9"
                        d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                      />
                      <path
                        fill="#007de9"
                        d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                      />
                      <path
                        fill="#007de9"
                        d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                      />
                    </g>
                  </svg>
                </Typography>{' '}
                <br />
              </Typography>
            </Box> */}
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 20, md: 41 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Unlock Your Future{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 24, md: 34 },
                      left: 2,
                      transform: 'rotate(3deg)',
                      '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line */}
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
                <Typography
                  component="div" // Changed to div
                  sx={{
                    mt: 5,
                    display: 'block', // Added block display
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 1.3,
                  }}
                >
                  Master English with Education House Leeds
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -16,
                      right: -21,
                      width: { xs: 22, md: 30 },
                      height: 'auto',
                    },
                  }}
                >
                  {/* ... SVG code ... */}
                </Typography>
                {/* Rest of your code */}
              </Typography>
            </Box>

            <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant="h4">
                {/* {
                    "Let's take an online course to improve your skills in a different way, you can set your own study time according to your learning speed. So you san study comfortable and absorb tge material easily."
                  } */}
                {
                  'Master English, Transform Opportunities. Your gateway to global success'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
              <StyledVideo controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </StyledVideo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
{/* <Slider {...sliderConfig}>
          {data.map((item) => (
            <MentorCardItem key={String(item.id)} item={item} />
          ))}
        </Slider> */}