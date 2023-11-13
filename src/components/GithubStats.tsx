import React from 'react';
import { Box, Typography } from '@mui/material';

interface GithubStatsProps {
  darkMode: boolean;
  followers: number;
  following: number;
  repos: number;
}

export const GithubStats = ({ darkMode, followers, following, repos }: GithubStatsProps) => {
  const stats = [
    { label: 'Repos', value: repos },
    { label: 'Followers', value: followers },
    { label: 'Following', value: following },
  ];

  return (
    <Box
      border={darkMode ? 'none' : '1px solid #141d2f'}
      borderRadius={'8px'}
      display='flex'
      justifyContent={'space-around'}
      marginBottom={24}
      padding={24}
      sx={{ backgroundColor: darkMode ? '#141d2f' : 'white' }}
    >
      {stats.map(({ label, value }, index) => (
        <Box alignItems='center' display={'flex'} gap={8} flexDirection={'column'} key={index} marginBottom={1}>
          <Typography fontWeight={600} color={darkMode ? 'white' : '#141d2f'}>
            {label}
          </Typography>
          <Typography color={darkMode ? 'white' : '#141d2f'}>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};
