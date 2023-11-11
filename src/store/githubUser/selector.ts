import { RootState } from '../store';

export const selectGithubUser = (state: RootState) => state.githubUser.githubUser;
export const selectGithubUserRequestStatus = (state: RootState) => state.githubUser.githubUserRequestStatus;