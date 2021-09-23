import {
  getRequiredPostsData,
  getRequiredUserProfileData,
} from './helpers';

export const fetchTimelinePosts = async (pageNumber: number) => {
  try {
    const timelineApiEndpoint = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_KEY}&page=${pageNumber}`;

    return await getRequiredPostsData(timelineApiEndpoint);

  } catch (error) {
    throw error;
  }
};

export const fetchUserProfile = async (userName: string) => {
  try {
    const userProfileApiEndpoint = `https://api.unsplash.com/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_KEY}`;
  
    return await getRequiredUserProfileData(userProfileApiEndpoint);
  
  } catch (error) {
    throw error;
  }
};

export const fetchUserPosts = async (userName: string, pageNumber: number) => {
  try {
    const userPostsApiEndpoint = `https://api.unsplash.com/users/${userName}/photos?client_id=${process.env.REACT_APP_CLIENT_KEY}&page=${pageNumber}`;
  
    return await getRequiredPostsData(userPostsApiEndpoint);

  } catch (error) {
    throw error;
  }
};
