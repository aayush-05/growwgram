import {
  AnyAction,
  Dispatch,
} from 'redux';

import {
  fetchUserPosts,
  fetchUserProfile,
} from '../../utils/apis';
import {
  ADD_USER_POSTS,
  ADD_USER_PROFILE,
  CLEAR_USER_PROFILE,
  ERROR_USER_POSTS,
  ERROR_USER_PROFILE,
  FETCH_USER_POSTS,
  FETCH_USER_PROFILE,
} from '../actionTypes/profileActionTypes';

export const getUserPosts = (userName: string, pageNumber: number) => {
  if (pageNumber) {
    return async (dispatch: Dispatch<AnyAction>) => {
      try {
        dispatch({type: FETCH_USER_POSTS});
        const userPostsData = await fetchUserPosts(userName, pageNumber);
        dispatch({
          type: ADD_USER_POSTS,
          payload: userPostsData,
        });
      } catch(error) {
        console.log(error);
        dispatch({type: ERROR_USER_POSTS});
      };
    };
  }
};

export const getUserProfile = (userName: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch({type: FETCH_USER_PROFILE});
      const userProfileData = await fetchUserProfile(userName);
      dispatch({
        type: ADD_USER_PROFILE,
        payload: userProfileData,
      });
    } catch(error) {
      console.log(error);
      dispatch({type: ERROR_USER_PROFILE});
    };
  };
};

export const clearUserProfile = (userName: string) => {
  return {
    type: CLEAR_USER_PROFILE,
    payload: userName,
  };
}
