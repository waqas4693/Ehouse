import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link';
import { navigations } from './navigation.data'

const Dropdown: FC<{ items: typeof navigations[0]["dropdownItems"] }> = ({ items }) => (
  <Box sx={{
    display: 'none',
    backgroundColor: 'background.paper',
    borderRadius: '4px',
    position: 'absolute',
    top: '100%',
    zIndex: 1,
    minWidth: '150px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  }}>
    {items?.map(item => (
      <Box
        key={item.path}
        sx={{
          display: 'block',
          padding: '8px 12px',
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'background.default',
          },
        }}
      >
        <Link href={item.path} passHref>{item.label}</Link>
      </Box>
    ))}
  </Box>
);

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label, dropdownItems }) => (
        <Box
          key={destination}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),
            '&:hover div': {
              display: dropdownItems ? 'block' : 'none',
            },
          }}
        >
          <Box key={destination}>
            <Link href={destination} passHref>{label}</Link>
          </Box>
          {dropdownItems && <Dropdown items={dropdownItems} />}
        </Box>
      ))}
    </Box>
  );
}


export default Navigation