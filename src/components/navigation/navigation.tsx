import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { navigations } from './navigation.data';

interface OpenState {
  [index: number]: boolean;
}

const Dropdown: FC<{ items: typeof navigations[0]['dropdownItems'] }> = ({ items }) => (
  <Box
    sx={{
      display: 'none',
      backgroundColor: 'background.paper',
      borderRadius: '4px',
      position: 'absolute',
      top: '100%',
      zIndex: 1,
      minWidth: '150px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
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

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<OpenState>({});

  const handleToggle = (index: number) => {
    setIsOpen((prevOpen) => ({...prevOpen, [index]:!prevOpen[index] }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label, dropdownItems }, index) => (
        <Box
          key={destination}
          sx={{
            position: 'elative',
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
            '& a': {
              color: 'grey.500',
              textDecoration: 'none',
              transition: 'color 0.3s',
            },
            '&:hover a': {
              color: 'econdary.main',
            },
          }}
        >
          {label}
          {dropdownItems && (
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={() => handleToggle(index)}
            >
              {isOpen[index]? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7 7-7"
                  />
                </svg>
              )}
            </Box>
          )}
          {dropdownItems && (
            <Box
              sx={{
                display: isOpen[index]? 'block' : 'none',
              }}
            >
              <Dropdown items={dropdownItems} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;