import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Link } from '@mui/material'

const StudentAndStaffGuidance: FC = () => {
    const studentTableColumns = ['Student Guidance', 'Action']
    const staffTableColumns = ['Staff Guidance', 'Action']

    const studentFileNames = [
        { name: 'Prospectus', fileName: 'prospectus_student.pdf' },
        { name: 'Student Handbook', fileName: 'student_handbook.pdf' },
        { name: 'Learning Resources Guide', fileName: 'learning_resources_student.pdf' },
        { name: 'Student Policies and Procedure Manual', fileName: 'student_policies_and_procedure_manual.pdf' },
        { name: 'Guidance for Potential Students', fileName: 'guidance_for_potential_students.pdf' },
    ];

    const staffFileNames = [
        { name: 'Staff Handbook', fileName: 'staff_handbook.pdf' },
        { name: 'Management and Staff Manual', fileName: 'management_staff_manual.pdf' },
    ];

    return (
        <Box>
            <Box sx={{ px: 10, py: 5 }}>
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
                    Student And Staff Guidance
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
                                    {studentTableColumns.map((column, index) => (
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
                                {studentFileNames.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell key={rowIndex} sx={{ fontSize: '14px', fontWeight: 500 }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                component="a"
                                                href={`/files/${row.fileName}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="contained"
                                                color="secondary"
                                                sx={{ borderRadius: '8px' }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
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
                                    {staffTableColumns.map((column, index) => (
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
                                {staffFileNames.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        <TableCell key={rowIndex} sx={{ fontSize: '14px', fontWeight: 500 }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                component="a"
                                                href={`/files/${row.fileName}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="contained"
                                                color="secondary"
                                                sx={{ borderRadius: '8px' }}
                                            >
                                                View
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

export default StudentAndStaffGuidance
