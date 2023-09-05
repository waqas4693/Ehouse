import { FC } from 'react'
import Box from '@mui/material/Box'
// import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
// import { StyledButton } from '../styled-button'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const HomeNewsLetter: FC = () => {
  return (
    // <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
    //   <Container>
    //     <Box
    //       sx={{
    //         backgroundColor: 'secondary.main',
    //         borderRadius: 10,
    //         py: { xs: 4, md: 10 },
    //         px: { xs: 4, md: 8 },
    //         textAlign: 'center',
    //       }}
    //     >
    //       <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
    //         Subscribe to Our News Letter
    //       </Typography>
    //       <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>

    //       <Box
    //         sx={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           flexDirection: { xs: 'column', md: 'row' },
    //           justifyContent: 'space-around',
    //           width: { xs: '100%', md: 560 },
    //           mx: 'auto',
    //         }}
    //       >
    //         <InputBase
    //           sx={{
    //             backgroundColor: 'background.paper',
    //             borderRadius: 3,
    //             width: '100%',
    //             height: 48,
    //             px: 2,
    //             mr: { xs: 0, md: 3 },
    //             mb: { xs: 2, md: 0 },
    //           }}
    //           placeholder="Enter your Email Address"
    //         />
    //         <Box>
    //           <StyledButton disableHoverEffect size="large">
    //             Subscribe
    //           </StyledButton>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>

    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 10 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        > */}
      <ImageList sx={{ maxWidth: '100%' }}
        variant="quilted"
        cols={4}
        rowHeight={300}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    // </Box>

  )
}

export default HomeNewsLetter