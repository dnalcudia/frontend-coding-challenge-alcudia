import React from 'react';
import { useAppDispatch } from '../utils/hooks/storeHooks';
import { getGithubUserByUsername } from '../store/githubUser/thunks';

export const DevFinder = () => {
  const dispatch = useAppDispatch();

  const dispatchGetGithubUserByUsername = () => {
    dispatch(getGithubUserByUsername('dnalcudia'));
  };

  return (
    <button onClick={dispatchGetGithubUserByUsername}>xd</button>
  );
};
