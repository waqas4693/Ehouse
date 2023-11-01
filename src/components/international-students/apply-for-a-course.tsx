import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

const columns = ['Training/Short Course Name', 'Level', 'Wks / Days', 'Start Date', 'End Date', 'Fees', 'Actions'];

const data = [
  ['Principles of Team Leading', 'Level 2', '6 Weeks', '07-09-2021', '13-10-2021', '£3,200'],
  ['Principles of business administration', 'Level 2', '6 Weeks', '07-09-2021', '13-10-2021', '£3,200'],
  ['Principles of customer service', 'Level 2', '6 Weeks', '07-09-2021', '13-10-2021', '£3,200'],
  // Add more rows as needed
];


function courseData(
  courseName: string,
  duration: string,
  price: string
): { courseName: string; duration: string; price: string } {
  return { courseName, duration, price }
}


const ApplyForACourse: FC = () => {

  const applyforacourse = [
    { text: 'Fill in Online Registration Assessment Form' },
    { text: 'Wait for approval of Registration Assessment Form' },
    { text: 'Get Visa Support Letter and apply for UK Visitor Visa to join course' }
  ];

  return (
    <Box>
      <Box sx={{ px: 10, py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
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
                Apply For A Course
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '28px', fontWeight: 600 }} variant="body1">
                Training in 3 easy steps
              </Typography>
            </Box>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {applyforacourse.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 30 }}>
                  <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                  {item.text}
                </li>
              ))}

            </ul>


          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/images/applyforacourse.svg" alt="Image" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: 10, py: 5, backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>

            <Table sx={{
              border: '1px solid lightgray',
              borderRadius: '10px'
            }}>
              <TableHead sx={{
                position: 'relative',
                color: 'white',
                backgroundColor: 'secondary.main',

              }} >
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                    <TableCell>
                      <Button variant="contained" sx={{
                        position: 'relative',
                        backgroundColor: 'secondary.main'
                      }} >
                        Register Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ApplyForACourse
