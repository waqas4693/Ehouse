import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ParticipantAttendancePolicy: FC = () => {
  const ParticipantAttendance = [
    {
      text: 'Setting high expectations for attendance and punctuality at all timetabled sessions.'
    },
    {
      text: 'Working in partnership with participants and, where applicable, their employers, to ensure good attendance and punctuality for embedding a culture of reliability and commitment.'
    },
    { text: 'Monitoring and taking action to improve attendance and punctuality where necessary.' }
  ];


  return (
    <Box>
      <Box sx={{ px: 10, py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
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
                Participant Attendance & Punctuality Policy
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Education House Leeds is committed to provide high quality training and education in order to
                contribute in participants / students success. To achieve this, we must maximise learning
                opportunities by
              </Typography>
            </Box>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ParticipantAttendance.map((item, index) => (
                <li key={index} style={{ fontSize: '14px', fontWeight: 400 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>
                  {item.text}
                </li>
              ))}
            </ul>

          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/images/participantAttendance.svg" alt="Image" style={{ width: '100%' }} />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Our Expectations & Minimum Standard
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Education House Leeds expects 100% attendance and punctuality at all timetabled sessions including role-plays, tutorials and etc. Any participant who has not
                achieved at least 90% attendance without full justification will be withdrawn from Education House Leeds through disciplinary procedure.
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'black',
                paddingTop: '15px',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.2,
              }}
            >
              Procedures & Implementation
            </Typography>


            <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
              <li >
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Attendance will be regularly monitored throughout participants’ time at ehosue.
              </li>
              <li >
                <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Attendance of all participants will be reviewed according to below mentioned:
              </li>
            </ul>

            <Box sx={{ backgroundColor: '#fff', border: '2px lightgray solid', borderRadius: '5px', width: '50%', mb: 2 }}>

              <Grid container sx={{ margin: 0, p: 4 }} >
                <Grid item xs={12} md={6} >
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: { xs: 15, md: 18 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >
                    Course Duration
                  </Typography>
                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px', py: 2 }} variant="body1">
                    1 Week
                  </Typography>
                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px', py: 2 }} variant="body1">
                    4 Weeks
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: { xs: 15, md: 18 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >
                    Attendance Review Point
                  </Typography>

                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px', py: 2 }} variant="body1">
                    After 3rd Day
                  </Typography>

                  <Typography sx={{ lineHeight: 1.6, fontSize: '16px', py: 2 }} variant="body1">
                    Every Friday
                  </Typography>
                </Grid>
              </Grid>

            </Box>



            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Participants are expected to give a good reason with evidence for all absences.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Participants are expected to provide a reasonable justification for any lateness. Teaching staff have the right to refuse entrance in class for late comers.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Where absences/lateness can be foreseen in advance, the participant should notify Student Welfare Officer (SWO). Appropriate evidence should be provided to
                  SWO for absence to be classed as &quot;authorized&quot;.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>For unforeseen absences, such as illness, the participant must contact SWO for his / her absence as early as possible on the first day of absence and every subsequent
                  day unless they are signed off by a doctor for a given period. On the following day, participants must provide evidence their absence before authorised absence can be
                  marked in registers.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Non-attendance may be dealt under Education House Leeds’s disciplinary procedure and may result in a final written warning or expulsion.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Participants are normally expected to make medical and other appointments outside the timetabled hours.
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Staff Procedures & Guidence
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                This document covers only the most common situations that could occur. Therefore when the procedures and guidance do not appear to cover a unseen situation,
                teacher/trainer/SWO should either use their own judgement to resolve the matter, or consult with their Quality Assurance Committee (QAC) appointed member.
                Any feedback on the suitability of the policy and guidance should be made available to QAC nominated member for unguided situation.
              </Typography>

            </Box>


            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'black',
                paddingTop: '15px',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.2,
              }}
            >
              Attendance Procedures:
            </Typography>


            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>All attendance registers must be marked in time and accurately.

                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Staff member responsible for the session must complete the register markings ( presence, absence or lateness ) ASAP before pm. If staff member persistently fails
                  to mark a register or marks register late, he / she may be subject to disciplinary action. Where the attendance register remains outstanding for 5 days the
                  presumption will be for disciplinary action..
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Staff writing academic references for participant / student may refer to participant or student record of attendance.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Participants will be withdrawn from their course / training if they fail to respond to warnings or breach the terms of their Attendance Agreement. ( if applicable)
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>A formal written report on a participant’s attendance may be made to the participant’s sponsor or his/her employer.
                </li>

              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Staff Procedures & Guidence
              </Typography>
            </Box>


            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Whether the case is reasonable.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>The number of absences taken by the individual.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Repetitions of the same justification.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Whether the justification is with evidence.
                </li>

              </ul>
            </Box>

            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'black',
                paddingTop: '15px',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.2,
              }}
            >
              Examples of Legitimate Reasons for absence might include:
            </Typography>


            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Medical appointments which cannot be made outside of timetabled hours.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Religious holiday.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Attendance at a funeral.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Severe disruption the transport network.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Driving test.
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                An Absence Will Not Be Authorized For any Of The following reasons:
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Holidays.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Babysitting.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Driving lessons.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Birthdays.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Leisure activities.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Shopping.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Full or Part-time work (other than work experience).
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                If the SWO judges the absence to be legitimate he/she should change the absent mark to authorised absence in the register. Where no justification for the absence is
                provided in advance, SWO must contact the participant or employer to ascertain the reason for the absence ASAP. Where possible the participant should be asked
                \to attend unless there is a valid reason for non-attendance. SWO should record any contact made, discussions, reasons and information and ensure this is
                communicated to QAC appointed member.
              </Typography>

            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                For unseen absence, participant should contact SWO. Responsible trainer / teacher will mark the participant &quot;absent&quot; and ask for “an explanation for an absence&quot; on
                his / her arrival. In addition, teacher / trainer should draw the participant&quot;s attention to the attendance policy and stress that non-attendance will be followed up
                and dealt with.
              </Typography>

            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Participant will provide evidence of being absent on the day next to absent day or following day to SWO. Evidence for the absence may be in the form of a note from
                employer or a medical certificate in the case of 5 or more days absence.
              </Typography>

            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                If a pattern of non-attendance emerges, SWO should follow this up at the earliest opportunity and record information on the participant’s personal file and QAC nominated
                staff must be advised.
              </Typography>

            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                If the level of non-attendance is judged to be unacceptable then Education House Leeds disciplinary procedure should be used. As the policy states that we expect 100%
                attendance, anything below this, unless by prior agreement or with valid reason, is unacceptable. It would therefore be appropriate to use the disciplinary procedure as
                soon as problems become apparent, rather than leave the problem to grow without formal action.
              </Typography>

            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Staff Responsibilities
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                All staff are responsible for ensuring the good attendance and punctuality of their participants and for dealing with attendance and punctuality issues whenever they
                occur.
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  color: '#000',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                Trainer / teacher responsible for session must:
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Complete the register markings ( presence, absence or lateness ) ASAP before pm.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Follow-up absence on participant’ arrival on the day next to absent day or the following day.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Promote good punctuality and attendance through his/her own behaviour and teaching standards.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Working with the participant to improve attendance.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Dealing with any personal/pastoral issues that affect poor attendance and punctuality.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Reporting persistent issues of participants to SWO and follow up any absences and ascertain reasons.
                </li>

              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'black',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                SWO is responsible for:
              </Typography>
            </Box>


            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Carrying out immediate follow-up to an absence and recording reasons for absence and lateness
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Monitoring attendance and punctuality issues at team meetings and taking early action to resolve issues

                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Ensuring that registers are marked accurately and timely and follow up on any unmarked register.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Ensuring that, in the event of a staff member being absent, the register is taken or reallocated on the timetable in case of long term absence.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Ensuring that major changes to timetables are communicated to QAC appointed staff member.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Making initial contact with an absent participant to find out the reasons for the absence.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Writing written warnings to participants if required.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Writing formal attendance report to participant’s sponsor / employer if required.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Processing authorized absence
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Recording the results of any conversations and conveying this information to the QAC appointed staff.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Maintaining records relating to punctuality and attendance and details of any evidence produced to support absences and lateness.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Ensuring minor changes to timetables are communicated to QAC appointed staff.
                </li>

                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Liaising with employers in order to improve attendance and resolves issues.
                </li>
              </ul>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  color: 'black',
                  fontSize: { xs: 15, md: 20 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                QAC appointed member is responsible for:
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>

              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Arranging a cover and ensuring that the register is marked accordingly in case of attendance staff member’s sickness.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Audit of attendance register on daily / weekly / monthly basis.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Ensuring that participant /student’s absence is communicated to his / her employer or sponsor ASAP or to Home office for 10 consecutive key contacts (if applicable ).
                </li>

              </ul>
            </Box>

            {/* <Box sx={{ mb: 2 }}>
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
                Quick Look
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                Responsible staff for attendance and punctuality
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Trainer / Teacher.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>Student Welfare Officer.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>QAC Appointed member
                </li>
              </ul>
            </Box> */}

            {/* <Box sx={{ mb: 2 }}>
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
                Abbreviation
              </Typography>
            </Box> */}

            {/* <Box sx={{ mb: 2 }}>
              <ul style={{ lineHeight: 1.2, listStyle: 'none', padding: 0, }}>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>SWO : Student Welfare Officer.
                </li>
                <li style={{ lineHeight: 1.5 }}>
                  <span style={{ color: 'red', fontSize: '1.7em', marginRight: '0.3em' }}>&bull; </span>QAC : Quality Assurance Committee.
                </li>
              </ul>
            </Box> */}
          </Grid>
        </Grid >
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
    </Box >
  )
}

export default ParticipantAttendancePolicy