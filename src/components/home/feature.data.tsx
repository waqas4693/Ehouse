import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Learn how to progress your career with international exposure',
    icon: < ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Learn how to manage and run a business like a true business professional ?',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description: 'Learn how to adopt the skills and techniques you need to become an entrepreneur in your field of choice.',
    icon: <LocalLibraryIcon />,
  },
]