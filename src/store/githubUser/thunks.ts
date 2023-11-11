import {
    setGithubUser,
    setGithubUserRequestStatus
} from './index';
import { RequestStatus } from '../../ts/enums/RequestStatus';
import { getGithubUserData } from '../../services/githubService';
import { AppThunk } from '../store';
import { parseGithubUserModel } from '../../utils/parsers/parseGithubUserModel';

export const getGithubUserByUsername =
  (username: string): AppThunk =>
    async dispatch => {
      try {
        dispatch(setGithubUserRequestStatus(RequestStatus.Loading));

        const data = await getGithubUserData(username);
        const githubUser = parseGithubUserModel(data);

        
        dispatch(setGithubUser(githubUser));
        dispatch(setGithubUserRequestStatus(RequestStatus.Success));

      } catch (error) {
        dispatch(setGithubUserRequestStatus(RequestStatus.Failed));
      }
    };