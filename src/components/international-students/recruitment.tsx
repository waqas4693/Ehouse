import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Recruitment: FC = () => {
    const regions = [
        { text: 'Pakistan' },
        { text: 'India' },
        { text: 'China' },
        { text: 'Libia' },
        { text: 'United Arab Emirates (UAE) – including Dubai' }
    ];

    const services = [
        {
            text: 'English Language Proficiency Courses',
            description: 'We offer both General English and IELTS Preparation Courses to help students meet the English language requirements of UK universities.'
        },
        {
            text: 'University and Course Selection',
            description: 'With our extensive experience and network, we assist students in selecting the right university and course that align with their interests, academic background, and long-term goals.'
        },
        {
            text: 'Career Counselling',
            description: 'Our experienced team offers personalised guidance to help students make informed academic and career decisions.'
        },
        {
            text: 'Application and Admission Support',
            description: 'We support students throughout the application process, including document preparation, personal statements, and university communication.'
        },
        {
            text: 'Visa and Pre-departure Guidance',
            description: 'Our team helps students understand the UK student visa process and prepares them for successful relocation and adjustment to life in the UK.'
        }
    ];

    const accreditations = [
        { text: 'British Accreditation Council (BAC) – Accredited since August 2020' },
        { text: 'City & Guilds and ILM' },
        { text: 'Organisation for Tourism and Hospitality Management (OTHM) – Recognised training provider' }
    ];

    const whyChooseUs = [
        { text: 'Over 10 years of experience in UK higher education and training' },
        { text: 'End-to-end support from English preparation to visa guidance' },
        { text: 'Strong connections with UK colleges and universities' },
        { text: 'Accredited and recognised programmes' },
        { text: 'A student-first approach based on trust, transparency, and excellence' }
    ];

    return (
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
                            International Student Recruitment
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
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
                            Your Gateway to Premier UK Education
                        </Typography>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            At Education House Leeds, we are dedicated to connecting ambitious international students with top educational institutions across the United Kingdom. With over 10 years of experience, we have successfully guided students from a wide range of backgrounds toward academic and career success.
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
                            Our Global Reach
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            We work with students from across the globe, particularly from:
                        </Typography>
                    </Box>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {regions.map((item, index) => (
                            <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                                {item.text}
                            </li>
                        ))}
                    </ul>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            Our culturally aware and multilingual team understands the specific needs and aspirations of students from each of these regions, and we tailor our services to offer the highest level of support.
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
                            Our Services
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            We provide comprehensive support to international students interested in studying in the UK:
                        </Typography>
                    </Box>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {services.map((item, index) => (
                            <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                                {item.text}
                                <Typography sx={{ lineHeight: 1.6, fontSize: '14px', color: '#666', mt: 1 }} variant="body1">
                                    {item.description}
                                </Typography>
                            </li>
                        ))}
                    </ul>

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
                            Accreditations and Recognition
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            Education House Leeds is proud to be accredited and affiliated with the following bodies:
                        </Typography>
                    </Box>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {accreditations.map((item, index) => (
                            <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                                {item.text}
                            </li>
                        ))}
                    </ul>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            These accreditations reflect our commitment to quality education and student support.
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
                            Why Choose Education House Leeds?
                        </Typography>
                    </Box>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {whyChooseUs.map((item, index) => (
                            <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                                {item.text}
                            </li>
                        ))}
                    </ul>

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
                            Partner With Us
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            If you represent a UK college or university and are looking to expand your global reach, we welcome the opportunity to collaborate. We are committed to ethical, effective, and student-focused recruitment practices that benefit both students and institutions.
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
                            Contact Us
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            To learn more or start your application, contact us today:
                        </Typography>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
                            Email: studentsrecruitment@ehouse.org.uk
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ lineHeight: 1.6, fontSize: '16px', fontWeight: 'bold' }} variant="body1">
                            Education House Leeds – Bridging Students to a Better Future.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <img src="/images/recruitment.svg" alt="Recruitment" style={{ width: '100%' }} /> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Recruitment 