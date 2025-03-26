import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { FooterSectionTitle } from '@/components/footer'

interface NavigationItemProps {
  label: string
  path: string
}

const usefulLinkItems: Array<Navigation> = [
  {
    label: 'Available Dates For B1 Test',
    path: 'https://seltbooking.trinitycollege.co.uk/OEWeb/loadExamDtl.do'
  },
  {
    label: 'Test Your Level Of English',
    path: 'https://class.efset.org/school/start-test?test_id=ea45c32e-779c-4f5e-8f3f-c3220f1fac3f'
  },
  {
    label: 'Book Life In The UK Test',
    path: 'https://www.lituktestbooking.co.uk/lituk-web/'
  },
  {
    label: 'Driving Theory Test Students',
    path: 'https://app.theorytestpro.co.uk/login'
  },
  {
    label: 'Book Driving Theory Test',
    path: 'https://www.gov.uk/book-theory-test',
  },
  {
    label: 'IELTS Registration',
    path: 'https://ieltsregistration.britishcouncil.org/',
  },
  {
    label: 'Road 2 IELTS',
    path: 'https://rtigt.clarityenglish.com/#prefix=EHL',
  },
  {
    label: 'IXL',
    path: 'https://uk.ixl.com/',
  },
]

const quickLinkItems: Array<Navigation> = [
  {
    label: 'Accreditations And Affiliations',
    path: '/accreditations-and-affiliations',
  },
  {
    label: 'Courses',
    path: '/courses'
  },
  {
    label: 'Pay By Bank Transfer',
    path: '/pay-by-bank-transfer'
  },
  {
    label: 'Terms & Conditions',
    path: '/terms-and-conditions'
  },
  {
    label: 'Vacancies',
    path: '/vacancies',
  }
]

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
      <Grid item xs={12} md={7}>
        <FooterSectionTitle title="Useful Links" />
        {usefulLinkItems.map(({ label, path }, index) => (
          <UsefulLinks key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={5}>
        <FooterSectionTitle title="Quick Links" />
        {quickLinkItems.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation