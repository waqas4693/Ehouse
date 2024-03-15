import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'

// function courseData(
//   courseName: string,
//   duration: string,
//   price: string
// ): { courseName: string; duration: string; price: string } {
//   return { courseName, duration, price }
// }

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

const ApplyForACourse: FC = () => {
  const columns = ['Short Course', 'Qualification', 'Duration', 'Lessons Per Week', 'Fees', 'Action']

  const coursesNames = ['General English Course', 'IELTS Preparation Course', 'Business English Course']

  // const applyforacourse = [
  //   { text: 'Fill in Online Registration Assessment Form' },
  //   { text: 'Wait for approval of Registration Assessment Form' },
  //   { text: 'Get Visa Support Letter and apply for UK Visitor Visa to join course' }
  // ];

  const [open, setOpen] = React.useState(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' })
  const [selectedCourse, setSelectedCourse] = useState<string>('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    selectedCourse: '',
  })

  const resetForm = (): void => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      selectedCourse: '',
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const response = await axios.post('https://www.ai2terminator.com/form-submission.php', formData)

      const message = response.data.message

      if (response.data.status === 'success') {
        handleClose()
        handleSnackbarOpen('success', message)
        resetForm()
      } else if (response.data.status === 'failure') {
        handleClose()
        handleSnackbarOpen('error', message)
        resetForm()
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
    }
  }

  const handleSnackbarOpen = (newSeverity: string, newMessage: string): void => {
    setSnackbar({ open: true, severity: newSeverity || 'success', message: newMessage })
  }

  const handleSelectCourse = (courseName: string): void => {
    setSelectedCourse(courseName)
    formData.selectedCourse = courseName
    handleOpen()
  }

  return (
    <Box>
      <Box sx={{ px: 10, py: 5 }}>
        {/* <Grid container spacing={3}>
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
        </Grid> */}
        <Typography
          variant='h2'
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

      <Box sx={{ px: 10, py: 5, backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Table
              sx={{
                border: '1px solid lightgray',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <TableHead
                sx={{
                  position: 'relative',
                  backgroundColor: 'background.default',
                }}
              >
                <TableRow sx={{}}>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        fontSize: '16px',
                        fontWeight: 600,
                      }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {coursesNames.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell key={rowIndex} sx={{ fontSize: '14px', fontWeight: 500 }}>
                      {row}
                    </TableCell>
                    <TableCell sx={{ color: '#808080', fontSize: '14px', fontWeight: 400 }}>Certificate</TableCell>
                    <TableCell sx={{ color: '#808080', fontSize: '14px', fontWeight: 400 }}>11 Months</TableCell>
                    <TableCell sx={{ color: '#808080', fontSize: '14px', fontWeight: 400 }}>5</TableCell>
                    <TableCell sx={{ color: '#808080', fontSize: '14px', fontWeight: 400 }}>£5500</TableCell>
                    <TableCell>
                      <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                        sx={{ borderRadius: '8px' }}
                        onClick={() => handleSelectCourse(row)}
                      >
                        Register Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
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
              <img src='/images/form-close-button.svg' alt='Close Button' style={{ cursor: 'pointer' }} />
            </IconButton>
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
                <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Checkbox
                  // Handle the checkbox state
                  />
                  By submitting this form you agree to our Terms and Conditions
                </Typography>
              </Box>
              <Button type='submit' variant='contained' color='secondary' fullWidth sx={{ mt: 3, borderRadius: '8px' }}>
                Register Now
              </Button>
            </form>
          </Box>
        </Modal>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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
    </Box>
  )
}

export default ApplyForACourse
