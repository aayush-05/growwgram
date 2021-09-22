import './loader.css';

import Logo from '../../../assets/images/logo.png';

const Loader = () => {
  return (
    <div className='loader07OuterContainer'>
      <div className='loader07Container'>
        <img src={Logo} alt='Growwgram' className='loader07Logo'/>
      </div>
    </div>
  );
};

export default Loader;
