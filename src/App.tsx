import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/common/Header';
import Loader from './components/common/Loader';

import { useAppSelector } from './store/hooks';

import ProfilePage from './views/ProfilePage';
import TimelinePage from './views/TimelinePage';

import './App.css';

const App = () => {
  const profileData = useAppSelector(state => state.profileData);
  const timelinePostsData = useAppSelector(state => state.timelineData);
  
  const isTimelineLoading = timelinePostsData.isFetching && timelinePostsData.timelinePosts.length <= 10;
  const isProfileLoading = profileData.isFetching && profileData.userPosts.length <= 10 && profileData.userProfile.id === undefined;
  
  return (
    <>
      {(isTimelineLoading || isProfileLoading) && (
        <Loader />
      )}
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={TimelinePage} />
          <Route exact path="/:user" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
