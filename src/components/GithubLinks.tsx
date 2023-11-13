import React from 'react';
import { Box, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import { useDarkMode } from '../context/DarkModeContext';

interface GithubLinksProps {
  blog: string;
  company: string;
  location: string;
  twitter: string;
}

export const GithubLinks = ({ company, blog, location, twitter }: GithubLinksProps) => {
  const { darkMode } = useDarkMode();

  const links = [
    { logo: PlaceIcon, value: location },
    { logo: LinkIcon, value: blog },
    { logo: TwitterIcon, value: twitter },
    { logo: ApartmentIcon, value: company },
  ];

  return (
    <Box display='grid' gap={2} gridTemplateColumns='repeat(2, 1fr)' width={'100%'}>
      {links.map(({ logo: Logo, value }, index) => (
        <Box alignItems='center' display={'flex'} gap={12} key={index}>
          <Logo fontSize='medium' sx={{ color: '#4b6a9b' }} />
          <Typography sx={{ color: !!value ? (darkMode ? 'white' : '#141d2f') : '#4b6a9b' }} variant='body2'>
            {value || 'Not Available'}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
