import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  clearUserProfile,
  getUserProfile,
} from '../../store/actions/profileActions';
import { useAppSelector } from '../../store/hooks';

import UserPosts from '../../components/profilePage/UserPosts';
import UserProfile from '../../components/profilePage/UserProfile';

import './profilePage.css';

const ProfilePage = () => {
  const { user } = useParams<Record<string, string | undefined>>();
  const { isError } = useAppSelector(state => state.profileData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user !== undefined) {
      dispatch(getUserProfile(user));
      return (() => {dispatch(clearUserProfile(user))});
    }
  }, [])

  return (
    <>
      <main className='profilePage05OuterContainer'>
        {isError ? (
          <h6 className='ErrorMessage'>
            Some network error occurred.
            <br /> 
            Please refresh
          </h6>
        ) : (
          <>
            <UserProfile />
            <UserPosts username={user as string} />
          </>
        )}
      </main>
    </>
  );
};

export default ProfilePage;
