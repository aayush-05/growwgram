import './profilePage.css';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserPosts from '../../components/profilePage/UserPosts';
import UserProfile from '../../components/profilePage/UserProfile';
import {
  clearUserProfile,
  getUserProfile,
} from '../../store/actions/profileActions';

const ProfilePage = () => {
  const { user } = useParams<Record<string, string | undefined>>();
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
      <UserProfile />
      <UserPosts username={user as string} />
    </main>
    </>
  );
};

export default ProfilePage;
