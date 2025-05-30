import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/educationhouseleeds/',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/educationhouseleeds/?viewAsMember=true',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCInCkv901I2a_oYONAbgVbQ',
  },
  {
    name: 'Pinterest',
    link: 'https://www.pinterest.co.uk/educationhouseleeds/',
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
      {item.name === 'Linkedin' && <LinkedInIcon />}
      {item.name === 'Youtube' && <YouTubeIcon />}
      {item.name === 'Pinterest' && <PinterestIcon />}
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
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

export default SocialLinks