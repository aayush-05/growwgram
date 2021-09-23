import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../../App';

import LogoLight from '../../../assets/images/logo.png';
import LogoDark from '../../../assets/images/logoDark.png';
import LightMode from '../../../assets/images/lightMode.png';
import DarkMode from '../../../assets/images/nightMode.png';

import './header.css';

const Header = ({ changeTheme}: propsDataType) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <nav className='header01OuterContainer'>
        <div className='header01Container'>
          <Link to='/'>
            {currentTheme === 'light' ? (
              <img src={LogoLight} alt='Growwgram' className='header01Logo'/>
            ) : (
              <img src={LogoDark} alt='Growwgram' className='header01Logo'/>
            )}
          </Link>

          <input className='header01SearchContainer' placeholder='Search'/>
          
          <div className='header01ButtonsContainer'>
            {currentTheme === 'light' ? (
              <img src={DarkMode} alt='Dark mode' onClick={() => { changeTheme('dark') }}/>
            ) : (
              <img src={LightMode} alt='Light mode' onClick={() => { changeTheme('light') }}/>
            )}
            <button className='PrimaryButton'>Log in</button>
            <a href='' className='PrimaryLink header01SignupLink'>Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

type propsDataType = {
  changeTheme: (arg0: string) => void
};

export default React.memo(Header);
