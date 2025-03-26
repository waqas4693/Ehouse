import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '../styled-button'
import Link from '@mui/material/Link';

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton> */}
      <Link href="/international-students/apply-for-a-course" target="_blank" rel="noopener noreferrer">
        <StyledButton color="secondary" disableHoverEffect={true}>Register Now</StyledButton>
      </Link>
    </Box>
  )
}

export default AuthNavigation
