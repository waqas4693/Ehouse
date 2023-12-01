import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ArrivingInUk: FC = () => {

  const arrivingintheuk = [
    { text: 'Your offer letter from Educational House Leeds.' },
    { text: 'Your sponsor letter or bank statement used to obtain your visa.' },
    { text: 'Details of where you are staying.' }
  ];

  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                color: 'secondary.main',
                fontSize: { xs: 15, md: 36 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Arriving in the UK
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              We understand that arriving in a new country can be a thrilling but intimidating experience.
              Please visit the UKCISA website to find out which documents you will need for your arrival in
              the UK, and what to look forward to when you pass through immigration and customs.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Immigration Control
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Once you arrive at any of the international airports in the UK, you will have to go through the
              UK immigration and customs control before picking your luggage. Make sure you have your
              passport and documents related to your studies such as
            </Typography>
          </Box>


          <ul style={{ listStyle: 'none', padding: 0 }}>
            {arrivingintheuk.map((item, index) => (
              <li key={index} style={{ fontSize: '14px', fontWeight: 400, paddingBottom: 15 }}>
                <img src="/images/red-arrow.svg" alt="Arrow" style={{ marginRight: '8px', transform: 'translateY(3px)' }} />
                {item.text}
              </li>
            ))}
          </ul>

        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/images/arriving_in_uk.svg" alt="Image" style={{ width: '100%' }} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              The immigration officer will interview you in English, and you are expected to answer in English. Usually, there are two main queues: One is meant for European
              Economic Area and Swiss nationals, while the other is for everyone else. Kindly ensure you join the correct queue. Make sure the immigration Officer has put a date
              stamp on your passport before leaving Immigration Control.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              At most international airports, baggage is usually dropped off at one of the carousels in the baggage collection area.Find your flight number and the name of your
              flight’s departure location on the screens or above the carousels and wait for each item of your baggage to emerge. If something goes wrong, find a representative
              from the airline you have travelled with and complete a lost baggage form.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              It is also essential for you to know about eGates when you arrive in the United Kingdom. eGates are an alternative to seeing an immigration officer/border force officer.
              They are automated self-service barriers located at immigration checkpoints at UK airports. The eGates are for people who hold a current passport (with a biometric
              chip) from Australia, Canada, Japan, New Zealand, Singapore, South Korea and the United States of America. As a non-visa national seeking entry to the UK on a
              Short-Term Student Visa, you must MAKE sure you see a Border Force officer instead of using the eGates
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Customs
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Once you have found all the items of your baggage, you must go through customs control. There are 3 channels at customs control. The green channel is for people
              who have nothing to declare, the red channel is for people who have goods to declare and the blue channel is for those who arrive from an airport of the European
              Union (EU). Those who can go through the blue channel have already cleared all of their baggage through customs control. Please note that even if you pass
              through the green channel, you may be asked to open up your luggage for inspection.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              Once you have found all the items of your baggage, you must go through customs control. There are 3 channels at customs control. The green channel is for people
              who have nothing to declare, the red channel is for people who have goods to declare and the blue channel is for those who arrive from an airport of the European
              Union (EU). Those who can go through the blue channel have already cleared all of their baggage through customs control. Please note that even if you pass
              through the green channel, you may be asked to open up your luggage for inspection.
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              sx={{
                position: 'relative',
                color: '#000',
                fontSize: { xs: 15, md: 20 },
                letterSpacing: 1.5,
                fontWeight: 'bold',
                lineHeight: 1.3,
              }}
            >
              Airport Pickup Service
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }} variant="body1">
              In an effort to further make your journey to the United Kingdom as trouble-free as possible, we provide our new international participants the opportunity to request
              for airport pick-up service to safely transport them to their accommodation. Do not hesitate to contact us if you need more information about our airport pick up service.
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}

export default ArrivingInUk