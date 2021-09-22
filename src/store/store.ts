import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import profileReducer from './reducers/profileReducer';
import timelineReducer from './reducers/timelineReducer';

const reducer = combineReducers({
  timelineData: timelineReducer,
  profileData: profileReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>;
export default store;
