import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { StyledButton } from '@/components/styled-button'
import { ExtendedCourse } from '@/interfaces/extended-course';

interface Props {
    item: ExtendedCourse;
}

const ExtendedCourseCardItem: FC<Props> = ({ item }) => {
    return (
        <Box
            sx={{
                px: 1.5,
                py: 5,
            }}
        >
            <Box
                sx={{
                    p: 2,
                    backgroundColor: 'background.paper',
                    borderRadius: 4,
                    transition: (theme) => theme.transitions.create(['box-shadow']),
                    '&:hover': {
                        boxShadow: 2,
                    },
                }}
            >
                <Box
                    sx={{
                        lineHeight: 0,
                        overflow: 'hidden',
                        borderRadius: 3,
                        height: 200,
                        mb: 2,
                    }}
                >
                    <Image src={item.photo as string} width={570} height={427} alt={'Course ' + item.id} />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
                        {item.courseName}
                    </Typography>
                    {/* <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography> */}
                    <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
                        {item.courseDescription}
                    </Typography>
                    <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="body2">
                        <List>
                            {item.courseBulletPoints.map((point, index) => (
                                <ListItem key={index}>
                                    {point}
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                    {/* <Box sx={{ '& img': { height: 26 } }}>
                        eslint-disable-next-line
                        <img src={item.company?.logo} alt={item.company?.name + ' logo'} />
                    </Box> */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& img': { height: 26 }
                        }}
                    >
                        <StyledButton color="primary" size="large" variant="contained">
                            Register Now
                        </StyledButton>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default ExtendedCourseCardItem