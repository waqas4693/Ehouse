import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutUs: FC = () => {
  return (
    <Box>
      <Box sx={{ px: 10, py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box sx={{ mb: 3 }}>
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
                WELCOME TO EDUCATION HOUSE LEEDS
              </Typography>
            </Box>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant="body1">
              Education House Leeds is an independent training provider based in the United Kingdom that serves learners from both Britain and beyond. We were established in Leeds, West Yorkshire in 2014 with the singular mission to provide individuals with the critical skills that they needed to advance themselves in their career, or to affirm their status here within the United Kingdom. In short, we train you for success.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant="body1">
              When you work with Education House Leeds, you get a unique, life-changing experience that’s also great value for money. We continuously strive to both widen the scope of our qualification offerings, and deliver on real value that helps our learners achieve their aspirations and raise themselves up to where they want to be.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              How do we deliver on our mission? We differentiate ourselves in three key ways, namely:
            </Typography>
            <ul style={{ lineHeight: 1, listStyle: 'none', padding: 0 }}>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>We provide a “hands-on” experiential learning approach.
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>We strive for greater recognition from the UK’s top accreditation groups.
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>We offer career-boosting courses in a number of areas, including preparation for some of the UK’s most fundamental and important tests.
              </li>
            </ul>

            <Typography
              variant="h2"
              sx={{
                my: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Hands-On Learning
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Education House Leeds has built its reputation by using a system of active, inspiring and experiential learning methods to help people gain the essential qualifications they need in a variety of fields. We challenge and inspire learners from all over the world to raise themselves up and reach new heights, which they can easily do thanks to our growing list of accreditations and courses we offer.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                my: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Growing Recognition
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Education House Leeds is increasingly recognised as a centre of learning excellence. In recent years, we have gained valuable accreditations from some of the country’s most dynamic and rigorous awarding organisations:
            </Typography>

            <Typography
              variant="h2"
              sx={{
                my: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              August 2020: British Accreditation Council (BAC)
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant="body1">
              BAC only awards its accreditation to educational institutes that undergo and pass their rigorous inspections and prove that they meet or exceed internationally recognised standards of educational quality. It’s a British gold standard in teaching, learning, assessment, governance, strategy, student support and more.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Education House Leeds is proud to bear the BAC mark since 2020. It is a testament to how we have developed a proven track record in success and helping students to achieve meaningful goals in their careers and in their lives. As long as we carry the BAC mark, all visitors can be assured that you are working with an institute that delivers educational services of the highest standards.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                my: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              March 2021: Training Qualifications UK (TQUK)
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant="body1">
              This creative, contemporary awarding organisation is based in Manchester and only works with centres that can prove real capability to deliver on their long list of qualifications. Education House Leeds was honoured with accreditation from TQUK in 2021, and is now one of their recognised centres offering qualifications in a wide range of fields.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Gaining this recognition from TQUK is a huge milestone for Education House Leeds, as this group is now among the top 10 awarding organisations across the UK and is recognised in particular by Ofqual for their fresh and innovative approach to what they do. Education House is now a reflection of those same standards.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                my: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Huge Range of Courses
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Our in-house courses have been long-established to help students of all nationalities gain success and recognition in the UK. Some of the specialist test prep assistance we offer includes:
            </Typography>
            <ul style={{ lineHeight: 1, listStyle: 'none', padding: 0 }}>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>UK Citizenship Tests
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginLeft: '0.6em', marginRight: '0.30em' }}>&bull; </span>Life in the UK test
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginLeft: '0.6em', marginRight: '0.30em' }}>&bull; </span>B1 test
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginLeft: '0.6em', marginRight: '0.30em' }}>&bull; </span>A2 test
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginLeft: '0.6em', marginRight: '0.30em' }}>&bull; </span>Driving Theory Test
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>Business and Management Courses
              </li>
              <li>
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.30em' }}>&bull; </span>And many more
              </li>
            </ul>

            <Typography
              variant="h2"
              sx={{
                mb: 2,
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              We Train You for Success
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px', mb: 2 }} variant="body1">
              Each year that Education House Leeds grows the student body, and expands the number of courses and accreditations that it offers, is a step towards mission success. Our particular education brand is rooted in the common desire to help people achieve more in their lives, whatever their nationality or background.
            </Typography>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Get in touch with us here at Education House Leeds to start growing your professional knowledge and skill set. We are ready to assist you on your journey.
            </Typography>
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
            <Box sx={{ float: 'right' }}>
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
  );
};

export default AboutUs