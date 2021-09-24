import React, { useState, useEffect } from 'react';
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

export const ThemeContext = React.createContext('light');

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const profileData = useAppSelector(state => state.profileData);
  const timelinePostsData = useAppSelector(state => state.timelineData);
  
  const isTimelineLoading = timelinePostsData.isFetching && timelinePostsData.timelinePosts.length < 10;
  const isProfileLoading = profileData.isFetching && (profileData.userPosts.length < 10 || profileData.userProfile.id === undefined);

  const changeTheme = (themeValue: string) => {
    const htmlElement = document.getElementsByTagName('html')[0];

    htmlElement.setAttribute('data-theme', themeValue);
    setCurrentTheme(themeValue);
    localStorage.setItem('growwgram-theme', themeValue);
  }

  useEffect(() => {
    if (localStorage.getItem('growwgram-theme') === 'dark') {
      const htmlElement = document.getElementsByTagName('html')[0];

      htmlElement.setAttribute('data-theme', 'dark');
      setCurrentTheme('dark')
    }
  }, []);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {(isTimelineLoading && isProfileLoading) && (
        <Loader />
      )}
      <BrowserRouter>
      <Header changeTheme={changeTheme}/>
        <Switch>
          <Route exact path="/:user" component={ProfilePage} />
          <Route path="/" component={TimelinePage} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
