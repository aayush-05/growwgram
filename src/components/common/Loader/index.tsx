import React, { useContext } from 'react';

import { ThemeContext } from '../../../App';

import LogoLight from '../../../assets/images/logo.png';
import LogoDark from '../../../assets/images/logoDark.png';

import './loader.css';

const Loader = () => {
  const currentTheme = useContext(ThemeContext);

  return (
    <div className='loader07OuterContainer'>
      <div className='loader07Container'>
        {currentTheme === 'light' ? (
          <img src={LogoLight} alt='Growwgram' className='loader07Logo'/>
        ) : (
          <img src={LogoDark} alt='Growwgram' className='loader07Logo'/>
        )}
      </div>
    </div>
  );
};

export default React.memo(Loader);
