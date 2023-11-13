import React from 'react';
import { Box, Typography } from '@mui/material';
import { GithubUser } from '../ts/types/GithubUser';
import { parseDate } from '../utils/parsers/parseDate';
import { GithubStats } from './GithubStats';
import { GithubLinks } from './GithubLinks';

interface GithubUserCardProps {
  githubUser: GithubUser;
  isLoading?: boolean;
}

export const GithubUserCard = ({ isLoading = false, githubUser }: GithubUserCardProps) => {
  const {
    avatarUrl,
    name,
    createdAt,
    username,
    bio,
    followers,
    following,
    publicRepos,
    company,
    location,
    twitterUsername,
    blog,
  } = githubUser;

  const githubProfileUrl = `https://github.com/${username}`;
  return (
    <Box
      alignItems='flex-start'
      borderRadius={'8px'}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      display='flex'
      gap={16}
      paddingX={24}
      paddingY={40}
      sx={{ backgroundColor: '#1e2a47', opacity: isLoading ? 0.3 : 1 }}
      width='100%'
    >
      <img src={avatarUrl} alt={`${username}-avatar`} style={{ width: '124px', borderRadius: '100px' }} />
      <Box display='flex' flexDirection='column' width={'100%'}>
        <Box alignItems={'flex-start'} display='flex' justifyContent={'space-between'} marginBottom={24}>
          <Box display='flex' flexDirection='column' alignItems='flex-start' gap={12}>
            <Typography color='white' fontSize={24} fontWeight={600}>
              {name || 'This profile has no name'}
            </Typography>
            <a href={githubProfileUrl} target='blank' style={{ textDecoration: 'none' }}>
              <Typography color='#1168ec' fontSize={14}>
                @{username}
              </Typography>
            </a>
            <Typography color='white' fontSize={14}>
              {bio || 'This profile has no bio'}
            </Typography>
          </Box>
          <Typography color='white' fontSize={14}>
            Joined {parseDate(createdAt)}
          </Typography>
        </Box>
        <GithubStats followers={followers} following={following} repos={publicRepos} />
        <GithubLinks company={company} blog={blog} location={location} twitter={twitterUsername} />
      </Box>
    </Box>
  );
};