import './App.css';

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

const App = () => {
  const isProfileFetching = useAppSelector(state => state.profileData.isFetching);
  const isPostsFetching = useAppSelector(state => state.timelineData.isFetching);
  
  return (
    <>
      {(isPostsFetching || isProfileFetching) && (
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
