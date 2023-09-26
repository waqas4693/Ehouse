import { ChangeEvent, FormEvent, useState, FC } from 'react';

const AdmissionForm: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    selectedCourse: 'General Course', // Default value for dropdown
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to the API with the form data
      const response = await fetch('http://www.ai2terminator.com/form-submission.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // You can redirect the user to a thank-you page or display a success message here
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="selectedCourse">Selected Course:</label>
          {formData.selectedCourse === 'General Course' ? (
            <select
              id="selectedCourse"
              name="selectedCourse"
              value={formData.selectedCourse}
              onChange={handleChange}
            >
              <option value="General Course">General Course</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
            </select>
          ) : (
            <input
              type="text"
              id="selectedCourse"
              name="selectedCourse"
              value={formData.selectedCourse}
              readOnly
            />
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm