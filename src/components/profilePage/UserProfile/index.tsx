import React, { useState, useContext } from 'react';
import { Blurhash } from 'react-blurhash';

import { ThemeContext } from '../../../App';

import { useAppSelector } from '../../../store/hooks';

import './userProfile.css';

const UserProfile = () => {
  const currentTheme = useContext(ThemeContext);
  const { userProfile } = useAppSelector(state => state.profileData);

  const [showImage, setShowImage] = useState(false);

  const imageOnLoad = () => {
    setShowImage(true);
  };

  const placeholderBlurhash = '|CPGjXof~qofRjofWBoft7~qfQayj[RjfQRjfQayWBfQIUayt7fQxufQay?bfQWBfQWBfQofj[WBj[fQRjfQj[fQWBfQj[offQj[fQxuj[WBfQWBt7fQayfQWBfQWBfQfQj[fQj[fQj[fQj[fQofWBfQoffQj[fQWBfQay';
  
  return (
    <>
      <div className='userProfile04DetailsContainer'>
        <div className='userProfile04ImageContainer'>
          <Blurhash 
            hash={placeholderBlurhash}
            style={{
              display: `${!showImage ? 'block' : 'none'}`
            }}
            height='100%' 
            width='100%'
          />
          <img 
            src={userProfile.profile_image}
            style={{
              display: `${showImage ? 'block' : 'none'}`
            }}
            alt='User'
            onLoad={imageOnLoad}
          />
        </div>

        <div className='userProfile04InfoContainer'>
          <div className='userProfile04NameContainer'>
            <h2>{userProfile.username}</h2>
            <button className='SecondaryButton'>Message</button>
            <button className='SecondaryButton'>Follow</button>
            <button className='SecondaryButton'>
              <svg aria-label="Down Chevron Icon" color={`${currentTheme === 'light' ? '#262626' : '#ffffff'}`} fill={`${currentTheme === 'light' ? '#262626' : '#ffffff'}`} height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </button>
            <svg aria-label="More Options" color={`${currentTheme === 'light' ? '#262626' : '#ffffff'}`} fill={`${currentTheme === 'light' ? '#262626' : '#ffffff'}`} height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
          </div>

          <div className='userProfile04StatsContainer'>
            <p>
              <b>{userProfile.total_photos} </b>
              posts
            </p>
            <p>
              <b>{userProfile.total_likes} </b>
              likes
            </p>
            <p>
              <b>{userProfile.total_collections} </b>
              collections
            </p>
          </div>
          
          <div className='userProfile04StatsContainer'>
            <p className='userProfile04UserName'>
              <b>{userProfile.name}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(UserProfile);
