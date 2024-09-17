import React, { FC } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    // {
    //     img: '/images/institutes/1.jpg',
    //     title: 'Traning Qualifications Uk',
    //     link: 'accreditations-and-affiliations'
    // },
    {
        img: '/images/institutes/2.jpg',
        title: 'BAC',
        link: '/images/certificate_bac.png'
    },
    {
        img: '/images/institutes/3.jpg',
        title: 'ico',
        link: 'accreditations-and-affiliations'
    },
    {
        img: '/images/institutes/4.jpg',
        title: 'ukrlp',
        link: 'accreditations-and-affiliations'
    },
    {
        img: '/images/institutes/5.jpg',
        title: 'othm',
        link: 'accreditations-and-affiliations'
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
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${item.img}?w=280&h=150&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=280&h=150&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderRadius: '10px',
                                    width: '280px',
                                    height: '150px',
                                }}
                            />
                        </a>

                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default HomeRecognizingInstitutes