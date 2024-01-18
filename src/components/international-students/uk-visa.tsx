import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ExpandableSection from '../custom-modules/expandable-accordian';

const UkVisa: FC = () => {
  const questionsAndAnswers = [
    {
      question: 'What type of Visa do I need to apply for a training / short course?',
      answer: 'Short Term Study Visa',
    },
    {
      question: 'What is the age limit to apply for a Short Term Study Visa?',
      answer: '18 years or Over',
    },
    {
      question: 'What is the student Short Term Study Visa validity?',
      answer: 'Six Months',
    },
    {
      question: 'Can I extend my Short Term Study Visa in the UK?',
      answer: 'No',
    },
    {
      question: 'Can I switch my Short Term Study Visa into any other immigration category visa?',
      answer: 'No',
    },
    {
      question: 'Is there any English Language requirement for the Short Term Study Visa?',
      answer: 'No',
    },
    {
      question: 'Are there any minimum academic requirements for the Short Term Study Visa?',
      answer: 'No',
    },
    {
      question: 'Can I take work placement or internship and if so, can it be paid or unpaid?',
      answer: 'No',
    },
    {
      question: 'Can I work paid or unpaid?',
      answer: 'No',
    },
    {
      question: 'Can I use the National Health Service?',
      answer: 'No',
    },
    {
      question: 'Can I bring dependants?',
      answer: 'Yes',
    },
    {
      question: 'Does training / course lead to any qualification?',
      answer: 'No',
    },
    {
      question: 'Do the training/courses have to be full time?',
      answer: 'No',
    },
  ];

  const grid1 = questionsAndAnswers.slice(0, 6).map((qa, index) => (

    <ExpandableSection question={qa.question} answer={qa.answer} key={index} />
  ));

  const grid2 = questionsAndAnswers.slice(6).map((qa, index) => (
    <ExpandableSection question={qa.question} answer={qa.answer} key={index} />
  ));

  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Box sx={{ mb: 5 }}>
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
              color: 'secondary.main',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          >
            Short Term Study Visa{' '}
            {/* <Box
              sx={{
                position: 'absolute',
                top: { xs: 24, md: 34 },
                left: 2,
                transform: 'rotate(3deg)',
                '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
              }}
            >
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box> */}
          </Typography>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {grid1}
        </Grid>
        <Grid item xs={12} md={6}>
          {grid2}
        </Grid>
      </Grid>
    </Box>
  )
}

export default UkVisa