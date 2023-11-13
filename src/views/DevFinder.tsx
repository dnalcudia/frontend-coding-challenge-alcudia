import React, { useState, useEffect, Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks/storeHooks';
import { selectGithubUser, selectGithubUserRequestStatus } from '../store/githubUser/selector';
import { RequestStatus } from '../ts/enums/RequestStatus';
import { Box, Alert, Snackbar } from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { DevFinderHeader } from '../components/DevFinderHeader';
import { GithubUserCard } from '../components/GithubUserCard/GithubUserCard';
import { getGithubUserByUsername } from '../store/githubUser/thunks';
import { useDarkMode } from '../context/DarkModeContext';

export const DevFinder = () => {
  const dispatch = useAppDispatch();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [searchValue, setSearchValue] = useState('');
  const [showError, setShowError] = useState(false);

  const githubUser = useAppSelector(selectGithubUser);
  const { username: activeUsername } = githubUser;
  const githubUserRequestStatus = useAppSelector(selectGithubUserRequestStatus);

  const isLoading = githubUserRequestStatus === RequestStatus.Loading;

  const handleOnClickSearch = () => {
    dispatch(getGithubUserByUsername(searchValue));
  };

  const handleOnChangeTextField = (value: string) => {
    setSearchValue(value);
  };

  const handleOnClickDarkMode = () => {
    toggleDarkMode();
  };

  const handleCloseErrorSnackbar = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (githubUserRequestStatus === RequestStatus.Failed) {
      setShowError(true);
    }
  }, [githubUserRequestStatus]);

  return (
    <Fragment>
      <Box
        alignItems='center'
        display='flex'
        flexDirection='column'
        height='100vh'
        justifyContent='center'
        sx={{ backgroundColor: darkMode ? '#141d2f' : 'white' }}
        width='100%'
      >
        <Box alignItems='center' display='flex' flexDirection='column' justifyContent='space-between' width={700}>
          <DevFinderHeader isLoading={isLoading} onClickDarkMode={handleOnClickDarkMode} />
          <SearchBar
            activeUsername={activeUsername}
            isLoading={isLoading}
            placeholder={'Search Github username...'}
            value={searchValue}
            onChangeTextField={handleOnChangeTextField}
            onClickSearch={handleOnClickSearch}
          />
          <GithubUserCard githubUser={githubUser} isLoading={isLoading} />
        </Box>
      </Box>
      <Snackbar autoHideDuration={6000} open={showError} onClose={handleCloseErrorSnackbar}>
        <Alert severity='error' sx={{ width: '100%' }} onClose={handleCloseErrorSnackbar}>
          GitHub username not found. Please make sure you entered the correct username.
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
