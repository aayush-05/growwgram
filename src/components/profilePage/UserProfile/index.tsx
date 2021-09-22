import './userProfile.css';

import { useAppSelector } from '../../../store/hooks';

const UserProfile = () => {
  const { userProfile } = useAppSelector(state => state.profileData);
  
  return (
    <>
      <div className='userProfile04DetailsContainer'>
        <div className='userProfile04ImageContainer'>
          <img src={userProfile.profile_image} alt='User'/>
        </div>
        <div className='userProfile04InfoContainer'>
          <div className='userProfile04NameContainer'>
            <h2>{userProfile.username}</h2>
            <button className='SecondaryButton'>Message</button>
            <button className='SecondaryButton'>Follow</button>
            <button className='SecondaryButton'>
              <svg aria-label="Down Chevron Icon" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </button>
            <svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
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

export default UserProfile;
