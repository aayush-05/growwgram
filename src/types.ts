export type postDataType = {
  id: string,
  blur_hash: string,
  url: string,
  likes: number,
  user: {
    username: string,
    first_name: string,
    last_name: string,
    profile_image: string,
    location?: string,
  },
};

export type postsDataType = {
  isFetching: boolean,
  timelinePosts: postDataType[],
};

export type userProfileDataType = {
  id: string,
  username: string,
  name: string,
  profile_image: string,
  total_collections: number | null,
  total_likes: number | null,
  total_photos: number | null,
};

export type userDataType = {
  isFetching: boolean,
  userProfile: userProfileDataType,
  userPosts: postDataType[],
};
