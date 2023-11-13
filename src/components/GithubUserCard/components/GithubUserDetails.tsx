import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDarkMode } from '../../../context/DarkModeContext';
import { parseDate } from '../../../utils/parsers/parseDate';

interface GithubUserDetailsProps {
  bio: string;
  createdAt: string;
  name: string;
  username: string;
}

export const GithubUserDetails = ({ bio, createdAt, name, username }: GithubUserDetailsProps) => {
  const { darkMode } = useDarkMode();
  const githubProfileUrl = `https://github.com/${username}`;

  return (
    <Box alignItems={'flex-start'} display='flex' justifyContent={'space-between'} marginBottom={24}>
      <Box alignItems='flex-start' display='flex' flexDirection='column' gap={12}>
        <Typography color={darkMode ? 'white' : '#141d2f'} fontSize={24} fontWeight={600}>
          {name || 'This profile has no name'}
        </Typography>
        <a href={githubProfileUrl} style={{ textDecoration: 'none' }} target='blank'>
          <Typography color='#1168ec' fontSize={14}>
            @{username}
          </Typography>
        </a>
        <Typography color={darkMode ? 'white' : '#141d2f'} fontSize={14}>
          {bio || 'This profile has no bio'}
        </Typography>
      </Box>
      <Typography color={darkMode ? 'white' : '#141d2f'} fontSize={14}>
        Joined {parseDate(createdAt)}
      </Typography>
    </Box>
  );
};
