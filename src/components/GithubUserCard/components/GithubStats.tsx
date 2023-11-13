import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../../context/DarkModeContext';
import { v4 as uuidv4 } from 'uuid';

interface GithubStatsProps {
  followers: number;
  following: number;
  repos: number;
}

export const GithubStats = ({ followers, following, repos }: GithubStatsProps) => {
  const { darkMode } = useDarkMode();

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
      {stats.map(({ label, value }) => (
        <Box alignItems='center' display={'flex'} flexDirection={'column'} gap={8} key={uuidv4()} marginBottom={1}>
          <Typography color={darkMode ? 'white' : '#141d2f'} fontWeight={600}>
            {label}
          </Typography>
          <Typography color={darkMode ? 'white' : '#141d2f'}>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};
