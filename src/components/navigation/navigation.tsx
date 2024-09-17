import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { navigations } from './navigation.data';

const Dropdown: FC<{ items: typeof navigations[0]['dropdownItems'] }> = ({ items }) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: '4px',
      position: 'absolute',
      top: '100%',
      left: 0,
      zIndex: 1,
      minWidth: '150px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      display: 'none',
      '.nav-item:hover &': {
        display: 'block',
      },
    }}
  >
    {items?.map((item) => (
      <Box
        key={item.path}
        sx={{
          display: 'block',
          padding: '8px 12px',
          textDecoration: 'none',
          color: 'inherit',
          fontWeight: 400,
          '&:hover': {
            backgroundColor: 'background.default',
          },
        }}
      >
        <Link href={item.path} passHref>
          {item.label}
        </Link>
      </Box>
    ))}
  </Box>
);

const Navigation: FC = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label, dropdownItems }) => (
        <Box
          key={destination}
          className="nav-item"
          sx={{
            position: 'relative',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            '& a': {
              color: 'grey.500',
              textDecoration: 'none',
              transition: 'color 0.3s',
            },
            '&:hover a': {
              color: 'secondary.main',
            },
          }}
        >
          <Link href={destination} passHref>
            {label}
          </Link>
          {dropdownItems && <Dropdown items={dropdownItems} />}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;