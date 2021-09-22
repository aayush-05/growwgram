import './header.css';

import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <nav className='header01OuterContainer'>
        <div className='header01Container'>
          <Link to='/'>
            <img src={Logo} alt='Growwgram' className='header01Logo'/>
          </Link>
          <input className='header01SearchContainer' placeholder='Search' disabled/>
          <div className='header01ButtonsContainer'>
            <button className='PrimaryButton'>Log in</button>
            <a href='' className='PrimaryLink header01SignupLink'>Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
