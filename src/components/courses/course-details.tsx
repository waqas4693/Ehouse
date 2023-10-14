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
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'


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

const CourseDetails: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })

  const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
    setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage })
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

export default CourseDetails