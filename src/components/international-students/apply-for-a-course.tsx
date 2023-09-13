import React from 'react';

const ApplyForACourse = () => {
  return (
    <div>
      <h1>Apply For A Course</h1>
      <p>Apply for a course / training in 3 easy steps:</p>
      <ol>
        <li>Fill in Online Registration Assessment Form</li>
        <li>Wait for approval of Registration Assessment Form</li>
        <li>Get Visa Support Letter and apply for UK Visitor Visa to join course</li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Training / short course name</th>
            <th>Level</th>
            <th>Wks / days</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Principles of team leading</td>
            <td>Level 2 Certificate</td>
            <td>6 Weeks</td>
            <td>07-09-2021</td>
            <td>13-10-2021</td>
            <td>£3,200</td>
            <td><button>REGISTER NOW</button></td>
          </tr>
          <tr>
            <td>Principles of business administration</td>
            <td>Level 2 Certificate</td>
            <td>6 Weeks</td>
            <td>19-10-2021</td>
            <td>24-11-2021</td>
            <td>£3,200</td>
            <td><button>REGISTER NOW</button></td>
          </tr>
          <tr>
            <td>Principles of customer service</td>
            <td>Level 2 Certificate</td>
            <td>6 Weeks</td>
            <td>19-10-2021</td>
            <td>24-11-2021</td>
            <td>£3,200</td>
            <td><button>REGISTER NOW</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApplyForACourse;