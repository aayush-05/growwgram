import {
  AnyAction,
  Dispatch,
} from 'redux';

import { fetchTimelinePosts } from '../../utils/apis';
import {
  ADD_TIMELINE_POSTS,
  ERROR_TIMELINE_POSTS,
  FETCH_TIMELINE_POSTS,
} from '../actionTypes/timelineActionTypes';

export const getTimelinePosts = (pageNumber: number) => {
  if (pageNumber) {
    return async (dispatch: Dispatch<AnyAction>) => {
      try {
        dispatch({type: FETCH_TIMELINE_POSTS});
        const timelineData = await fetchTimelinePosts(pageNumber);
        dispatch({
          type: ADD_TIMELINE_POSTS,
          payload: timelineData,
        });
      } catch(error) {
        console.log(error);
        dispatch({type: ERROR_TIMELINE_POSTS});
      };
    };
  }
};
