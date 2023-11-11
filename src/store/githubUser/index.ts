import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../ts/enums/RequestStatus';
import { GithubUser } from '../../ts/types/GithubUser';
import reducers from './reducer';

export interface GithubUserState {
  githubUser: GithubUser;
  githubUserRequestStatus: RequestStatus;
}

const initialState: GithubUserState = {
  githubUser: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/43758751?v=4',
    bio: 'welcome to my crib',
    blog: '',
    company: 'Student',
    createdAt: '2018-10-01T17:20:38Z',
    followers: 5,
    followersUrl: 'https://api.github.com/users/dnalcudia/followers',
    following: 3,
    followingUrl: 'https://api.github.com/users/dnalcudia/following{/other_user}',
    id: 43758751,
    location: 'Mérida, Yuc.',
    name: 'Daniel Alcudia',
    publicRepos: 30,
    reposUrl: 'https://api.github.com/users/dnalcudia/repos',
    twitterUsername: 'dnalcudia',
    url: 'https://api.github.com/users/dnalcudia',
    username: 'dnalcudia',
  },
  githubUserRequestStatus: RequestStatus.Idle,
};

export const githubUserSlice = createSlice({
  name: 'githubUser',
  initialState,
  reducers,
});

export const { setGithubUser, setGithubUserRequestStatus } = githubUserSlice.actions;

export default githubUserSlice.reducer;
