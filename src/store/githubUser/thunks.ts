import {
    setGithubUser,
    setGithubUserRequestStatus
} from '.';
import { RequestStatus } from '../../ts/enums/RequestStatus';
import { GithubUserModel } from '../../ts/interfaces/GithubUserModel';
import { getGithubUserData } from '../../services/githubService';
import { AppThunk } from '../store';

export const getGithubUserByUsername =
  (username: string): AppThunk =>
    async dispatch => {
      try {
        dispatch(setGithubUserRequestStatus(RequestStatus.Loading));

        const data = await getGithubUserData(username);

        console.log(data)

        dispatch(setGithubUserRequestStatus(RequestStatus.Success));
      } catch (error) {
        dispatch(setGithubUserRequestStatus(RequestStatus.Failed));
      }
    };