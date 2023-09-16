import React, { useState, FC } from 'react';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel
} from '@mui/material';

const AdmissionForm: FC = () => {
  const [values, setValues] = useState({});

  // const handleChange = () => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = () => {
  //   e.preventDefault();
  // };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      {/* <Typography component="h1" variant="h5" align="center">
        Admission Form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        
        <Typography variant="h6" gutterBottom>
          Student Details
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="familyName"
          label="Family Name"
          id="familyName"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="otherNames"
          label="Other Names"
          id="otherNames"
          onChange={handleChange}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="dateOfBirth"
          label="Date of Birth"
          id="dateOfBirth"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Martial Status</InputLabel>
          <Select
            label="Martial Status"
            name="martialStatus"
            onChange={handleChange}
          >
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="married">Married</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h6" gutterBottom>
          Contact Details
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="telephoneNumber"
          label="Telephone Number"
          name="telephoneNumber"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="mobileNumber"
          label="Mobile Number"
          name="mobileNumber"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={handleChange}
        />

        <Typography variant="h6" gutterBottom>
          Emergency Contact (Relative or friend)
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emergencyName"
          label="Name"
          name="emergencyName"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emergencyRelationship"
          label="Relationship to Student"
          name="emergencyRelationship"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emergencyPhoneNumber"
          label="Phone Number"
          name="emergencyPhoneNumber"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emergencyAddress"
          label="Address"
          name="emergencyAddress"
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form> */}
    </Container>
  );
};

export default AdmissionForm;