import React, { FC } from 'react'
import { iconButtonClasses } from '@mui/material/IconButton'
import { Course } from '@/interfaces/course'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Props {
  item: Course,
  onRegisterClick: (courseName: string) => void;}

const CourseCardItem: FC<Props> = ({ item, onRegisterClick }) => {

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
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            mb: 2,
          }}
        >
          <Image src={item.cover} width={512} height={393} alt={'Course ' + item.id} />
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 600 }}>
            {item.title}
          </Typography>
          <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 500, color: 'text.secondary' }}>
            {item.duration}
          </Typography>
        </Box>
        <Box sx={{ px: 2 }}>
          <Typography variant='h5' sx={{ fontSize: '14px', fontWeight: 500 }}>
            {'£' + item.price}
          </Typography>
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

export default CourseCardItem
