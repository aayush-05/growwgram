import {
  postDataType,
  userProfileDataType,
} from '../types';

export const cacheApiResponse = async (apiEndpoint: string) => {
  const cache = await caches.open("groww-gram");
  const cachedData = await cache.match(apiEndpoint);

  if (cachedData) {
    const cachedJsonResponse = await cachedData.json();

    if (Math.floor(new Date().getTime()/1000) - cachedJsonResponse.cachedDate < 84600) {
      return cachedJsonResponse.responseData;
    }
  }

  try {
    const response = await fetch(apiEndpoint);
    const jsonResponse = await response.json();

    const customBody = JSON.stringify({
      responseData: jsonResponse,
      cachedDate: Math.floor(new Date().getTime() / 1000),
    });
    const customResponse = new Response(customBody);

    if (customResponse !== undefined) {
      cache.put(apiEndpoint, customResponse);
      return jsonResponse;
    }

  } catch (error) {
    console.log(error);
  }
};

export const getRequiredPostsData = async (apiEndpoint: string) => {
  const response = await cacheApiResponse(apiEndpoint) as [];
  const requiredResponseData = response.map((postData: any) => {
    return {
      id: postData.id,
      blur_hash: postData.blur_hash,
      url: postData.urls?.regular,
      likes: postData.likes,
      user: {
        username: postData.user?.username,
        first_name: postData.user?.first_name,
        last_name: postData.user?.last_name,
        profile_image: postData.user?.profile_image?.small,
        location: postData.user.location?.title,
      }
    } as postDataType;
  });

  return requiredResponseData;
};

export const getRequiredUserProfileData = async (apiEndpoint: string) => {
  const response = await cacheApiResponse(apiEndpoint);
  
  return {
    id: response.id,
    username: response.username,
    name: response.name,
    profile_image: response.profile_image?.large,
    total_collections: response.total_collections,
    total_likes: response.total_likes,
    total_photos: response.total_photos,
  } as userProfileDataType;
};
