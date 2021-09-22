import {
  getRequiredPostsData,
  getRequiredUserProfileData,
} from './helpers';

export const fetchTimelinePosts = async (pageNumber: number) => {
  const timelineApiEndpoint = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_KEY}&page=${pageNumber}`;
  
  return await getRequiredPostsData(timelineApiEndpoint);
};

export const fetchUserProfile = async (userName: string) => {
  const userProfileApiEndpoint = `https://api.unsplash.com/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_KEY}`;
  
  return await getRequiredUserProfileData(userProfileApiEndpoint);
};

export const fetchUserPosts = async (userName: string, pageNumber: number) => {
  const userPostsApiEndpoint = `https://api.unsplash.com/users/${userName}/photos?client_id=${process.env.REACT_APP_CLIENT_KEY}&page=${pageNumber}`;
  
  return await getRequiredPostsData(userPostsApiEndpoint);
};
