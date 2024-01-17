import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: '/images/gallery/1.jpg',
    title: 'Reception',
  },
  {
    img: '/images/gallery/2.jpg',
    title: 'Reception-2',
  },
  {
    img: '/images/gallery/3.jpg',
    title: 'Traning Room',
  },
  {
    img: '/images/gallery/4.jpg',
    title: 'Conference-Room',
  },
  {
    img: '/images/gallery/5.jpg',
    title: 'Cafeteria',
  },
  {
    img: '/images/gallery/6.jpg',
    title: 'Cafeteria-2',
  }
];

const HomeGallery: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pb: { xs: 8, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '40px',
          color: 'secondary.main',
          fontWeight: 600,
          py: 2
        }}
      >
        Explore Campus Life
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: '18px',
          color: '#909090',
          fontWeight: 400,
          pb: 2
        }}
      >
        Join our community of students around the world helping you succeed.
      </Typography>
      <ImageList
        sx={{ maxWidth: '100%' }}
        variant="quilted"
        gap={20}
        cols={3}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=280&h=280&fit=crop&auto=format`}
              srcSet={`${item.img}?w=280&h=280&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '10px',
                width: '400px',
                height: '280px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

  )
}

export default HomeGallery