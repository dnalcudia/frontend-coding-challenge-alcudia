import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/users';

export const getGithubUserData = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
  }
};
