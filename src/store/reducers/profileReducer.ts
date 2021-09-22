import {
  postDataType,
  userDataType,
  userProfileDataType,
} from '../../types';
import {
  ADD_USER_POSTS,
  ADD_USER_PROFILE,
  CLEAR_USER_PROFILE,
  ERROR_USER_POSTS,
  ERROR_USER_PROFILE,
  FETCH_USER_POSTS,
  FETCH_USER_PROFILE,
} from '../actionTypes/profileActionTypes';

const initialState: userDataType = {
  isFetching: false,
  userProfile: {
    id: '',
    username: '',
    name: '',
    profile_image: '',
    total_collections: null,
    total_likes: null,
    total_photos: null,
  },
  userPosts: [],
};

const profileReducer = (
  state = initialState,
  action: {type: string, payload?: postDataType[] | userProfileDataType}
) => {
  switch(action.type) {
    case FETCH_USER_POSTS:
    case FETCH_USER_PROFILE:
      return {
        ...state,
        isFetching: true,
      };

    case ADD_USER_POSTS:
      return {
        ...state,
        isFetching: false,
        userPosts: [
          ...state.userPosts,
          ...(action.payload as postDataType[]),
        ]
      };
    
    case ADD_USER_PROFILE:
      return {
        ...state,
        isFetching: false,
        userProfile: {
          ...state.userProfile,
          ...(action.payload as userProfileDataType),
        }
      };

    case ERROR_USER_POSTS:
    case ERROR_USER_PROFILE:
      return {
        ...state,
        isFetching: false,
      };
    
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          id: '',
          username: '',
          name: '',
          profile_image: '',
          total_collections: null,
          total_likes: null,
          total_photos: null,
        },
        userPosts: [],
      };
      
    default:
      return {
        ...state,
      };
  };
};

export default profileReducer;
