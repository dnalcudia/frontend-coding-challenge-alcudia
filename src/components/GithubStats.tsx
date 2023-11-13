import React from 'react';
import { Box, Typography } from '@mui/material';

interface GithubStatsProps {
  followers: number;
  following: number;
  repos: number;
}

export const GithubStats = ({ followers, following, repos }: GithubStatsProps) => {
  const stats = [
    { label: 'Repos', value: repos },
    { label: 'Followers', value: followers },
    { label: 'Following', value: following },
  ];

  return (
    <Box
      borderRadius={'8px'}
      display='flex'
      justifyContent={'space-around'}
      marginBottom={24}
      padding={24}
      sx={{ backgroundColor: '#141d2f' }}
    >
      {stats.map(({ label, value }, index) => (
        <Box alignItems='center' display={'flex'} gap={8} flexDirection={'column'} key={index} marginBottom={1}>
          <Typography fontWeight={600} sx={{ color: 'white' }}>
            {label}
          </Typography>
          <Typography sx={{ color: 'white' }}>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};
