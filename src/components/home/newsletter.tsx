import { FC } from 'react'
import Box from '@mui/material/Box'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// const itemData = [
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/cafetaria_1.jpg',
//     title: 'Cafeteria 1',
//   },
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/cafetaria_2.jpg',
//     title: 'Cafeteria 2',
//   },
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/conference-room.jpg',
//     title: 'Conference Room',
//   },
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/Reception_1.jpg',
//     title: 'Reception 1',
//   },
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/Reception_2.jpg',
//     title: 'Reception 2',
//   },
//   {
//     img: 'https://ehouseenglish.s3.eu-north-1.amazonaws.com/Training-room_2.jpg',
//     title: 'Traning Room 2',
//   }
// ];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  }
];

const HomeNewsLetter: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 10 },
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <ImageList
        sx={{ maxWidth: '100%' }}
        variant="quilted"
        gap={12}
        cols={4}
        rowHeight={280}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=280&h=280&fit=crop&auto=format`}
              srcSet={`${item.img}?w=280&h=280&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '10px', // Border radius of 10px
                width: '280px', // Fixed width
                height: '280px', // Fixed height
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default HomeNewsLetter