import React from 'react';
import { Box } from '@mui/material';
import { GithubUser } from '../../ts/types/GithubUser';
import { GithubStats } from './components/GithubStats';
import { GithubLinks } from './components/GithubLinks';
import { useDarkMode } from '../../context/DarkModeContext';
import { GithubUserDetails } from './components/GithubUserDetails';

interface GithubUserCardProps {
  githubUser: GithubUser;
  isLoading?: boolean;
}

export const GithubUserCard = ({ githubUser, isLoading = false }: GithubUserCardProps) => {
  const { darkMode } = useDarkMode();

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

  return (
    <Box
      alignItems='flex-start'
      borderRadius={'8px'}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      boxSizing={'border-box'}
      display='flex'
      gap={16}
      paddingX={24}
      paddingY={40}
      sx={{ backgroundColor: darkMode ? '#1e2a47' : 'white', opacity: isLoading ? 0.3 : 1 }}
      width='100%'
    >
      <img alt={`${username}-avatar`} src={avatarUrl} style={{ width: '124px', borderRadius: '100px' }} />
      <Box display='flex' flexDirection='column' width={'100%'}>
        <GithubUserDetails bio={bio} createdAt={createdAt} name={name} username={username} />
        <GithubStats followers={followers} following={following} repos={publicRepos} />
        <GithubLinks blog={blog} company={company} location={location} twitter={twitterUsername} />
      </Box>
    </Box>
  );
};
