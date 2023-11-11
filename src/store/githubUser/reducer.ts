import { PayloadAction } from '@reduxjs/toolkit';
import { GithubUserState } from '.';
import { RequestStatus } from '../../ts/enums/RequestStatus';
import { GithubUser } from '../../ts/types/GithubUser';

const setGithubUser = (state: GithubUserState, action: PayloadAction<GithubUser>): void => {
  state.githubUser = action.payload;
};

const setGithubUserRequestStatus = (state: GithubUserState, action: PayloadAction<RequestStatus>): void => {
  state.githubUserRequestStatus = action.payload;
};

const reducers = {
  setGithubUser,
  setGithubUserRequestStatus,
};

export default reducers;