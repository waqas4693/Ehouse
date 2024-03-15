import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'Test Your Level Of English',
    path: 'https://class.efset.org/school/start-test?test_id=ea45c32e-779c-4f5e-8f3f-c3220f1fac3f'
  },
  {
    label: 'Road 2 IELTS',
    path: 'https://rtigt.clarityenglish.com/#prefix=EHL',
  },
  {
    label: 'IXL',
    path: 'https://uk.ixl.com/',
  },
  {
    label: 'IELTS Registration',
    path: 'https://ieltsregistration.britishcouncil.org/',
  }
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          // mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const UsefulLinks: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          // mb: 1,
          color: 'primary.contrastText',
        }}
        target="_blank"
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Useful Links" />
        {courseMenu.map(({ label, path }, index) => (
          <UsefulLinks key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid> */}
    </Grid>
  )
}

export default FooterNavigation