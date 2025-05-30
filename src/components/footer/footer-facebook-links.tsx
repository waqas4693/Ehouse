import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook';
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Business Traning',
    link: 'https://www.facebook.com/Training4Biz/?view_public_for=133224183810380',
  },
  {
    name: 'IELTS Prepration',
    link: 'https://www.facebook.com/ieltspreparation.ehouse',
  }
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      {item.name === 'Business Traning' && <FacebookIcon />}Business Traning
      {item.name === 'IELTS Prepration' && <FacebookIcon />}IELTS Prepration
    </Link>
  </Box>
)

// default
const FacebookLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Box>
    </Box>
  )
}

export default FacebookLinks