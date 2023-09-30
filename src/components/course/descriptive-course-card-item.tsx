import React, { FC, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { iconButtonClasses } from '@mui/material/IconButton'
import { DescriptiveCourse } from '@/interfaces/descriptive-course'

interface Props {
    item: DescriptiveCourse
    onRegisterClick: (courseName: string) => void;
}

const DescriptiveCourseCardItem: FC<Props> = ({ item, onRegisterClick }) => {
    return (
        <Box
            sx={{
                px: 1,
                py: 4,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 4,
                    transition: theme => theme.transitions.create(['box-shadow']),
                    '&:hover': {
                        [`& .${iconButtonClasses.root}`]: {
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            boxShadow: 2
                        },
                    },
                }}
            >
                {/* <Box
                    sx={{
                        // overflow: 'hidden',
                        borderRadius: 4,
                        mb: 2,
                        backgroundColor: 'primary.main',
                    }}
                > */}
                <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '20px' }}>
                    <Image
                        src={item.cover}
                        alt={`Course ${item.id}`}
                        layout="fill"
                        objectFit="cover"
                        style={{ borderRadius: '16px 16px 0 0' }}
                    />
                </div>
                {/* <Image src={item.cover} width={512} height={393} alt={'Course ' + item.id} /> */}
                {/* </Box> */}
                <Box sx={{ px: 2 }}>
                    <Typography variant='h5' sx={{ fontSize: '28px', fontWeight: 600 }}>
                        {item.title}
                    </Typography>
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 500, color: 'text.secondary' }}>
                        {item.duration}
                    </Typography>
                </Box>
                <hr
                    style={{
                        color: '#DADADA',
                    }}
                />
                <Box sx={{ px: 2 }}>
                    <Typography variant='h5' sx={{ fontSize: '14px', fontWeight: 400 }}>
                        {item.description}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Duration
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.duration}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Lessons Per Week
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.lessonsPerWeek}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Hours Per Week
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.hoursPerWeek}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Class Time
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.classTime}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Suitable For
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.suitableFor}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Level
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.level}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Registration Fee
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.registerationFee}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Course Fee
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#909090' }}>
                                    {item.price}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, py: '20px' }}>
                    <Button variant='contained' onClick={() => onRegisterClick(item.title)} color='secondary' sx={{ flex: 1, borderRadius: '8px' }}>
                        Register Now
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default DescriptiveCourseCardItem
