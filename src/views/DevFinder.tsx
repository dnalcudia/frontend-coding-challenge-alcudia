import React, { useState, useEffect, Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks/storeHooks';
import { selectGithubUser, selectGithubUserRequestStatus } from '../store/githubUser/selector';
import { RequestStatus } from '../ts/enums/RequestStatus';
import { Box, Alert, Snackbar } from '@mui/material';
import { SearchBar } from '../components/SearchBar';
import { DevFinderHeader } from '../components/DevFinderHeader';
import { GithubUserCard } from '../components/GithubUserCard';
import { getGithubUserByUsername } from '../store/githubUser/thunks';
import { useDarkMode } from '../context/DarkModeContext';

export const DevFinder = () => {
  const dispatch = useAppDispatch();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [searchValue, setSearchValue] = useState('');
  const [showError, setShowError] = useState(false);

  const githubUser = useAppSelector(selectGithubUser);
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
        justifyContent='center'
        flexDirection='column'
        height='100vh'
        width='100%'
        sx={{ backgroundColor: darkMode ? '#141d2f' : 'white' }}
      >
        <Box alignItems='center' display='flex' flexDirection='column' justifyContent='space-between' width={700}>
          <DevFinderHeader isLoading={isLoading} onClickDarkMode={handleOnClickDarkMode} />
          <SearchBar
            isLoading={isLoading}
            placeholder={'Search Github username...'}
            value={searchValue}
            onClickSearch={handleOnClickSearch}
            onChangeTextField={handleOnChangeTextField}
          />
          <GithubUserCard isLoading={isLoading} githubUser={githubUser} />
        </Box>
      </Box>
      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseErrorSnackbar}>
        <Alert onClose={handleCloseErrorSnackbar} severity='error' sx={{ width: '100%' }}>
          GitHub username not found. Please make sure you entered the correct username.
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
