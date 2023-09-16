import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ArrivingInUk = () => {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          component="h2"
          sx={{
            position: 'relative',
            fontSize: { xs: 20, md: 41 },
            letterSpacing: 1.5,
            fontWeight: 'bold',
            lineHeight: 1.3,
          }}
        >
          <Typography
            component="mark"
            sx={{
              position: 'relative',
              color: 'primary.main',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          >
            Arriving In The Uk{' '}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 24, md: 34 },
                left: 2,
                transform: 'rotate(3deg)',
                '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
              }}
            >
              {/* eslint-disable-next-line */}
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
          </Typography>
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }} variant="h2">
          ARRIVING IN THE UK
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          We understand that arriving in a new country can be a thrilling but intimidating experience. Please visit the UKCISA website to find out which documents you will need for your arrival in the UK, and what to look forward to when you pass through immigration and customs.
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }} variant="h2">
          IMMIGRATION CONTROL
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          Once you arrive at any of the international airports in the UK, you will have to go through the UK immigration and customs control before picking your luggage. Make sure you have your passport and documents related to your studies such as
        </Typography>
      </Box>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', color: 'primary.main' }}>
              Your offer letter from Educational House Leeds.
            </Typography>
          </Box>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', color: 'primary.main' }}>
              Your sponsor letter or bank statement used to obtain your visa.
            </Typography>
          </Box>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Box sx={{ display: 'inline-block', backgroundColor: 'common.white', boxShadow: 1, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ px: 2, py: 1.5, fontSize: '1rem', color: 'primary.main' }}>
              Details of where you are staying.
            </Typography>
          </Box>
        </li>
      </ul>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          The immigration officer will interview you in English, and you are expected to answer in English. Usually, there are two main queues: One is meant for European Economic Area and Swiss nationals, while the other is for everyone else. Kindly ensure you join the correct queue. Make sure the immigration Officer has put a date stamp on your passport before leaving Immigration Control.
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          At most international airports, baggage is usually dropped off at one of the carousels in the baggage collection area.Find your flight number and the name of your flight’s departure location on the screens or above the carousels and wait for each item of your baggage to emerge. If something goes wrong, find a representative from the airline you have travelled with and complete a lost baggage form.
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          It is also essential for you to know about eGates when you arrive in the United Kingdom. eGates are an alternative to seeing an immigration officer/border force officer. They are automated self-service barriers located at immigration checkpoints at UK airports. The eGates are for people who hold a current passport (with a biometric chip) from Australia, Canada, Japan, New Zealand, Singapore, South Korea and the United States of America. As a non-visa national seeking entry to the UK on a Short-Term Student Visa, you must MAKE sure you see a Border Force officer instead of using the eGates
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }} variant="h2">
          CUSTOMS
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          Once you have found all the items of your baggage, you must go through customs control. There are 3 channels at customs control. The green channel is for people who have nothing to declare, the red channel is for people who have goods to declare and the blue channel is for those who arrive from an airport of the European Union (EU). Those who can go through the blue channel have already cleared all of their baggage through customs control. Please note that even if you pass through the green channel, you may be asked to open up your luggage for inspection.
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          Once you have found all the items of your baggage, you must go through customs control. There are 3 channels at customs control. The green channel is for people who have nothing to declare, the red channel is for people who have goods to declare and the blue channel is for those who arrive from an airport of the European Union (EU). Those who can go through the blue channel have already cleared all of their baggage through customs control. Please note that even if you pass through the green channel, you may be asked to open up your luggage for inspection.
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.primary', lineHeight: 1.6 }} variant="h2">
          AIRPORT PICK UP SERVICE
        </Typography>
      </Box>

      <Box sx={{ mb: 1, width: { xs: '100%', md: '70%' } }}>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          In an effort to further make your journey to the United Kingdom as trouble-free as possible, we provide our new international participants the opportunity to request for airport pick-up service to safely transport them to their accommodation. Do not hesitate to contact us if you need more information about our airport pick up service.
        </Typography>
      </Box>
    </Box>
  )
}

export default ArrivingInUk