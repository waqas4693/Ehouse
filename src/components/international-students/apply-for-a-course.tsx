import React, { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'

function courseData (
  courseName: string,
  duration: string,
  price: string
): { courseName: string; duration: string; price: string } {
  return { courseName, duration, price }
}

const rows = [
  courseData('General English Course', '11 Months', '£ 4500'),
  courseData('IELTS Preparation Course', '11 Months', '£ 4500'),
  courseData('Business English Course', '11 Months', '£ 4500'),
]

const ApplyForACourse: FC = () => {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          component='h2'
          sx={{
            position: 'relative',
            fontSize: { xs: 20, md: 41 },
            letterSpacing: 1.5,
            fontWeight: 'bold',
            lineHeight: 1.3,
          }}
        >
          <Typography
            component='mark'
            sx={{
              position: 'relative',
              color: 'primary.main',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          >
            Apply For A Course{' '}
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
              <img src='/images/headline-curve.svg' alt='Headline curve' />
            </Box>
          </Typography>
          <Typography
            component='div'
            sx={{
              mt: 5,
              display: 'block',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              lineHeight: 1.3,
            }}
          >
            Training in 3 easy steps
          </Typography>
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant='h5'>
          {'Fill in Online Registration Assessment Form'}
        </Typography>
      </Box>
      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant='h5'>
          {'Wait for approval of Registration Assessment Form'}
        </Typography>
      </Box>
      <Box sx={{ mb: 5, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }} variant='h5'>
          {'Get Visa Support Letter and apply for UK Visitor Visa to join course'}
        </Typography>
      </Box>

      <Table sx={{ boxShadow: 1, borderRadius: 4, backgroundColor: 'common.white' }} aria-label='courses table'>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.courseName}>
              <TableCell component='th' scope='row'>
                {row.courseName}
              </TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>
                <StyledButton>Register Now</StyledButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default ApplyForACourse
