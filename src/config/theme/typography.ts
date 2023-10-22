import { TypographyOptions } from '@mui/material/styles/createTypography'

export const fontFamily = [
  '"Cabin",-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
].join(',')


const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: 36,
    fontWeight: 700,
  },
  h2: {
    fontSize: 36,
    fontWeight: 700,
    color: '#DF4D4E'
  },
  h3: {
    fontSize: 26,
    fontWeight: 700,
    color: '#DF4D4E'
  },
  h4: {
    fontSize: 22,
    fontWeight: 700,
  },
  h5: {
    fontSize: 17,
    fontWeight: 600,
  },
  h6: {
    fontSize: 15,
    fontWeight: 600,
  },
  body1: {
    fontSize: '16px',
    fontWeight: '400'
  },
  body2: {
    fontSize: '14px',
    fontWeight: '600'
  },
  subtitle1: {
    fontSize: '0.85rem',
  },
  subtitle2: {
    fontSize: '0.8rem',
  },
}

export default typography
