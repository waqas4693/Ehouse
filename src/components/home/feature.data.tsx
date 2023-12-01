import React, { ReactNode } from 'react'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'General English Course',
    description: 'Our General English Course enhances your basic language skills, the IELTS Preparation',
    icon: < LocalLibraryIcon />,
  },
  {
    title: 'IELTS Preparation Course',
    description: 'Course prepares you for all modules with real exam practice',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Business English Course',
    description: 'Course hones your professional communication and business vocabulary.',
    icon: <LocalLibraryIcon />,
  },
]