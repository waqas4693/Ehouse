import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

type ServiceLocationDetails = {
  locationName: string
  locationAddress: string
  locationPhone: string
  locationWebsite: string
}

type ServiceData = {
  serviceName: string
  serviceDescription: string
  serviceLocationDetails: ServiceLocationDetails[]
}

function serviceData (
  serviceName: string,
  serviceDescription: string,
  serviceLocationDetails: ServiceLocationDetails[]
): ServiceData {
  return { serviceName, serviceDescription, serviceLocationDetails }
}

const airportDetails: ServiceLocationDetails = {
  locationName: 'Leeds Bradford Airport',
  locationAddress: 'Whitehouse Lane, West Yorkshire, LS19 7TU',
  locationPhone: '',
  locationWebsite: 'www.leedsbradfordairport.co.uk',
}

const railwayStationDetails: ServiceLocationDetails = {
  locationName: 'Leeds Train Station',
  locationAddress: 'New Station Street, West Yorkshire, LS1 4DY',
  locationPhone: '',
  locationWebsite: 'www.northernrailway.co.uk/stations/LDS',
}

const librariesDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Leeds Library',
    locationAddress: '18 Commercial St, Leeds LS1 6AL, United Kingdom',
    locationPhone: '+44 113 245 3071',
    locationWebsite: 'www.theleedslibrary.org.uk',
  },
  {
    locationName: 'Leeds Central Library',
    locationAddress: 'Calverley St, Leeds LS1 3AB, United Kingdom',
    locationPhone: '+44 113 378 5005',
    locationWebsite: '',
  },
  {
    locationName: 'Oakwood Library',
    locationAddress: '1 Oakwood Lane, Leeds LS8 2PZ, United Kingdom',
    locationPhone: '+44 113 378 1890',
    locationWebsite: '',
  },
]

const funPlacesDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Royal Armouries',
    locationAddress: 'Armories Drive, Leeds LS10 1LT, Leeds, UK',
    locationPhone: '',
    locationWebsite: 'www.royalarmouries.org/visit-us/leeds',
  },
  {
    locationName: 'Leeds Town Hall',
    locationAddress: 'The Headrow, Leeds LS1 3AD, United Kingdom',
    locationPhone: '',
    locationWebsite: 'www.leedstownhall.co.uk',
  },
  {
    locationName: 'Kirkstall Abbey',
    locationAddress: 'Abbey Rd, Leeds LS5 3EH, United Kingdom',
    locationPhone: '0044 - 113 378 4079',
    locationWebsite: 'museumsandgalleries.leeds.gov.uk/kirkstall-abbey',
  },
  {
    locationName: 'Abbey House Museum',
    locationAddress: 'Abbey Walk, Abbey Rd, Leeds LS5 3EH, United Kingdom',
    locationPhone: '0044 - 113 378 4079',
    locationWebsite: 'www.museumsandgalleries.leeds.gov.uk/abbey-house-museum',
  },
]

const propertyAgentDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Care 4 Properties',
    locationAddress: '188A Roundhay Road, Leeds LS8 5PL',
    locationPhone: '0044 - 113 451 3334',
    locationWebsite: 'www.care4properties.co.uk',
  },
  {
    locationName: 'Handley Gibson',
    locationAddress: 'Scott Hall House Sheepscar Street North, Leeds LS7 3AF',
    locationPhone: '0044 - 113 451 3135',
    locationWebsite: 'www.handleygibson.co.uk',
  },
  {
    locationName: 'Northwood',
    locationAddress: '64 Harrogate Road, Leeds, LS7 4LA',
    locationPhone: '0044 - 113 451 3280',
    locationWebsite: 'www.northwooduk.com',
  },
]

const bedAndBreakfastDetails: ServiceLocationDetails[] = [
  {
    locationName: 'OYO The Avenue',
    locationAddress: 'Harehills Avenue, Leeds LS8 4ET, United Kingdom',
    locationPhone: '0044 20 8089 8579',
    locationWebsite: 'www.oyorooms.com',
  },
  {
    locationName: 'The George of Leeds Hotel',
    locationAddress: '67-69 Great George St, Leeds LS1 3BB, United Kingdom',
    locationPhone: '0044 - 113 345 0505',
    locationWebsite: 'www.thegeorgeofleeds.co.uk',
  },
  {
    locationName: 'Hotel Novotel Leeds Centre',
    locationAddress: '4 Whitehall Quay, Leeds LS1 4HR, United Kingdom',
    locationPhone: '0044 - 113 396 9001',
    locationWebsite: '',
  },
]

const restaurantsDetails: ServiceLocationDetails[] = [
  {
    locationName: "Raja's",
    locationAddress: '186 Roundhay Road Chapel Town',
    locationPhone: '0044 113 248 0411',
    locationWebsite: 'www.rajasleeds.co.uk',
  },
  {
    locationName: "Maureen's",
    locationAddress: '105 Roundhay Road Chapel Town',
    locationPhone: '0044 - 113 240 6006',
    locationWebsite: 'www.maureenscaribbeantakeaway.co.uk',
  },
  {
    locationName: 'Oriental City',
    locationAddress: '30-36 Cross Stamford Street',
    locationPhone: '0044 - 113 244 9797',
    locationWebsite: '',
  },
  {
    locationName: 'Zaytouna Mediterranean Restaurant',
    locationAddress: '311 Roundhay Rd Chapel Town',
    locationPhone: '0044 - 113 249 0985',
    locationWebsite: '',
  },
]

const hospitalDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Chapel Allerton Hospital',
    locationAddress: 'Chapeltown Road, West Yorkshire, LS7 4SA',
    locationPhone: '0044 113 2433144',
    locationWebsite: '',
  },
  {
    locationName: "St James's Hospital",
    locationAddress: 'Beckett Street, Leeds West Yorkshire LS9 7TF',
    locationPhone: '0044 - 113 2433144',
    locationWebsite: '',
  },
]

const walkInCentreDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Shakespeare Medical Practice',
    locationAddress: 'Burmantofts Health Centre, Cromwell Mount, Leeds, LS9 7TA',
    locationPhone: '0113 295 1132',
    locationWebsite: 'https://www.nhs.uk/Services/GP/Overview/DefaultView.aspx?id=100382',
  },
]

const dentalPracticeDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Oakwood Dental Practice',
    locationAddress: '611 Roundhay Road, West Yorkshire, Oakwood, Leeds, LS8 4AR',
    locationPhone: '0113 240 2140',
    locationWebsite: 'https://www.oakwood-dental.co.uk/contact-us/',
  },
  {
    locationName: 'Chelwood Dental Care',
    locationAddress: '21 Chelwood Drive, West Yorkshire, Leeds, LS8 2AT',
    locationPhone: '0113 266 8459',
    locationWebsite: 'http://www.chelwooddentalcare.co.uk',
  },
  {
    locationName: 'Roundhay Road Dental Practice',
    locationAddress: '313 Roundhay Road, West Yorkshire, Leeds, LS8 4HT',
    locationPhone: '0113 2490795',
    locationWebsite: 'https://www.nhs.uk/Services/dentists/Overview/DefaultView.aspx?id=24724',
  },
]

const citizenAdviceDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Chapeltown Citizens Advice',
    locationAddress: 'Willow House, New Roscoe Buildings Cross, Francis Street, West Yorkshire, Leeds, LS7 4BZ',
    locationPhone: '0113 223 4400',
    locationWebsite: 'https://www.citizensadvice.org.uk/local/chapeltown/',
  },
]

const mosquesDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Masjid Quba',
    locationAddress: '24 Shepherds Ln, Harehills, Leeds LS8 4LG',
    locationPhone: '0113 307 0500',
    locationWebsite: '',
  },
  {
    locationName: 'Shahjalal Jamia Masjid',
    locationAddress: '27 Ellers Rd, Harehills, Leeds LS8 4JH',
    locationPhone: '0113 240 6558',
    locationWebsite: '',
  },
  {
    locationName: 'Bilal Masjid',
    locationAddress: 'Conway Rd, Harehills, Leeds LS8 5JH',
    locationPhone: '0113 240 7695',
    locationWebsite: '',
  },
]

const synagogueAndJewsCommunityCentersDetails: ServiceLocationDetails[] = [
  {
    locationName: 'United Hebrew Congregation Leeds',
    locationAddress: '151 Shadwell Lane, Leeds, LS17 8DW',
    locationPhone: ' 0113 269 6141',
    locationWebsite: 'https://www.uhcleeds.com/',
  },
  {
    locationName: 'Sinai Synagogue',
    locationAddress: ' 2A Roman Ave, Roundhay, Leeds LS8 2AN',
    locationPhone: '0113 266 5256',
    locationWebsite: 'https://www.sinaileeds.uk/',
  },
  {
    locationName: 'Beth Hamidrash Hagadol',
    locationAddress: 'Caretakers House, 399 Street Ln, Moortown, Leeds LS17 6HQ',
    locationPhone: '0113 269 2181',
    locationWebsite: 'https://www.bhhs.co.uk/',
  },
  {
    locationName: 'Leeds Jewish Welfare Board',
    locationAddress: 'Community Centre, Marjorie and Arnold Ziff Building, 311 Stonegate Rd, Moortown, Leeds LS17 6AZ',
    locationPhone: '0113 268 4211',
    locationWebsite: '',
  },
]

const hinduTemplesGurudawaraDetails: ServiceLocationDetails[] = [
  {
    locationName: 'Leeds Hindu Mandir',
    locationAddress: '36 Alexandra Rd, Burley, Leeds LS6 1RF',
    locationPhone: '0113 275 7024',
    locationWebsite: '',
  },
  {
    locationName: 'BAPS Shri Swaminarayan Mandir',
    locationAddress: '1 Weaver St, Burley, Leeds LS4 2AU',
    locationPhone: '07929 416749',
    locationWebsite: 'https://www.baps.org/Global-Network/UK-and-Europe/Leeds.aspx',
  },
  {
    locationName: 'The Sikh Temple',
    locationAddress: '192 Chapeltown Rd, Leeds LS7 4HZ',
    locationPhone: '0113 262 9073',
    locationWebsite: 'https://m.facebook.com/SikhTempleLeeds/',
  },
  {
    locationName: 'Ramgarhia Board Gurdwara Leeds',
    locationAddress: ' 8-10 Chapeltown Rd, Leeds LS7 3AP',
    locationPhone: '0113 262 0085',
    locationWebsite: 'https://www.ramgarhiaboardleeds.org/',
  },
]

const airportService = serviceData('Airport', 'AIRPORT AROUND US', [airportDetails])
const railwayStationService = serviceData('Railway Station', 'RAILWAY STATION AROUND US', [railwayStationDetails])
const librariesService = serviceData('Libraries', 'LIBRARIES AROUND USFounded in 1768...', librariesDetails)
const funPlacesService = serviceData('Fun Places', 'FUN PLACES AROUND USLike most cities...', funPlacesDetails)
const propertyAgentService = serviceData('Property Agents', 'PROPERTY AGENTS AROUND US', propertyAgentDetails)
const bedAndBreakfastService = serviceData('Bed and Breakfast', 'BED AND BREAKFAST AROUND US', bedAndBreakfastDetails)
const restaurantsService = serviceData('Restaurants', 'RESTAURANTS AROUND US', restaurantsDetails)
const hospitalService = serviceData('Hospital', 'HOSPITAL AROUND US', hospitalDetails)
const walkInCentreService = serviceData('Walk-In Centre', 'WALK IN CENTRE AROUND US', walkInCentreDetails)
const dentalPracticeService = serviceData('Dental Practice', 'DENTAL PRACTICE AROUND US', dentalPracticeDetails)
const citizenAdviceService = serviceData(
  'Citizen Advice Bureau',
  'CITIZEN ADVICE BUREAU AROUND US',
  citizenAdviceDetails
)
const mosquesService = serviceData('Mosques', 'MOSQUES AROUND US', mosquesDetails)
const synagogueAndJewsCommunityCentersDetailsServices = serviceData('Synagogue and Jews Community Centers', 'SYNAGOGUE AROUND US', synagogueAndJewsCommunityCentersDetails)
const hinduTemplesGurudawaraService = serviceData('Hindu Temples / Gurudawara', 'Hindu Temples / Gurudawara AROUND US', hinduTemplesGurudawaraDetails)

const rows = [
  airportService,
  railwayStationService,
  librariesService,
  funPlacesService,
  propertyAgentService,
  bedAndBreakfastService,
  restaurantsService,
  hospitalService,
  walkInCentreService,
  dentalPracticeService,
  citizenAdviceService,
  mosquesService,
  synagogueAndJewsCommunityCentersDetailsServices,
  hinduTemplesGurudawaraService
]

const DirectionAndLocation: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>()

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant='h2'
          sx={{
            position: 'relative',
            color: 'secondary.main',
            fontSize: { xs: 15, md: 36 },
            letterSpacing: 1.5,
            fontWeight: 'bold',
            lineHeight: 1.3,
          }}
        >
          Direction And Location
        </Typography>
      </Box>
      {rows.map((row, index) => (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Typography>{row.serviceName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
              <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }} variant='h2'>
                {row.serviceName} around us
              </Typography>
            </Box>
            <Table sx={{ boxShadow: 1, borderRadius: 4, backgroundColor: 'common.white' }} aria-label='courses table'>
              <TableHead>
                <TableRow>
                  <TableCell>Location Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Website</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {row.serviceLocationDetails.map((location, locationIndex) => (
                  <TableRow key={locationIndex}>
                    <TableCell>{location.locationName}</TableCell>
                    <TableCell>{location.locationAddress}</TableCell>
                    <TableCell>{location.locationPhone}</TableCell>
                    <TableCell>{location.locationWebsite}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default DirectionAndLocation
