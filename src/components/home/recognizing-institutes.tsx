import { FC } from 'react'
import Box from '@mui/material/Box'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: '/images/institutes/1.jpg',
        title: 'Reception',
    },
    {
        img: '/images/institutes/2.jpg',
        title: 'Reception-2',
    },
    {
        img: '/images/institutes/3.jpg',
        title: 'Traning Room',
    },
    {
        img: '/images/institutes/4.jpg',
        title: 'Conference-Room',
    }
];

const HomeRecognizingInstitutes: FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                // py: { xs: 4, md: 5 },
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <ImageList
                sx={{ maxWidth: '100%' }}
                variant="quilted"
                gap={20}
                cols={4}
                rowHeight={280}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=280&h=150&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=280&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderRadius: '10px',
                                width: '280px',
                                height: '150px'
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default HomeRecognizingInstitutes