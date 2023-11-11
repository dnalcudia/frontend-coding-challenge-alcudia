import React from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks/storeHooks';
import { getGithubUserByUsername } from '../store/githubUser/thunks';
import { selectGithubUser, selectGithubUserRequestStatus } from '../store/githubUser/selector';
import { RequestStatus } from '../ts/enums/RequestStatus';
import { Typography } from '@mui/material';

export const DevFinder = () => {
  const dispatch = useAppDispatch();

  const githubUser = useAppSelector(selectGithubUser);
  const githubUserRequestStatus = useAppSelector(selectGithubUserRequestStatus);

  const isLoading = githubUserRequestStatus === RequestStatus.Loading;

  const dispatchGetGithubUserByUsername = () => {
    console.log('click');
    dispatch(getGithubUserByUsername('dnalcudia'));
  };

  return (
    <div>
      <h1>Github User</h1>
      <button onClick={dispatchGetGithubUserByUsername}>xd</button>
      {isLoading ? (
        <Typography color='initial' variant='h3'>
          Is Loading...
        </Typography>
      ) : (
        <h3>{githubUser.name}</h3>
      )}
    </div>
  );
};
