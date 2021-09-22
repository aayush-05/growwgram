import {
  postDataType,
  postsDataType,
} from '../../types';
import {
  ADD_TIMELINE_POSTS,
  ERROR_TIMELINE_POSTS,
  FETCH_TIMELINE_POSTS,
} from '../actionTypes/timelineActionTypes';

const initialState: postsDataType = {
  isError: false,
  isFetching: false,
  timelinePosts: [],
};

const timelineReducer = (
  state = initialState,
  action: {type: string, payload?: postDataType[]}
) => {
  switch(action.type) {
    case FETCH_TIMELINE_POSTS:
      return {
        ...state,
        isFetching: true,
      };

    case ADD_TIMELINE_POSTS:
      return {
        ...state,
        isFetching: false,
        timelinePosts: [
          ...state.timelinePosts,
          ...(action.payload as postDataType[]),
        ]
      };
    
    case ERROR_TIMELINE_POSTS:
      return {
        ...state,
        isError: true,
        isFetching: false,
      };
      
    default:
      return {
        ...state,
      };
  };
};

export default timelineReducer;
