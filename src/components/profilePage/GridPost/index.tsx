import React, {
  useState,
} from 'react';
import { Blurhash } from 'react-blurhash';

import { postDataType } from '../../../types';

import './gridPost.css';

const GridPost = ({ postData, onClickHandler }: propsDataType) => {
  const [showImage, setShowImage] = useState(false);

  const imageOnLoad = () => {
    setShowImage(true);
  };

  return (
    <>
      <div className='gridPost08GridPost' onClick={() => {onClickHandler(postData.id)}}>
        <div className='gridPost08Backdrop'>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#ffffff"><path d="M116.50133,21.53583c-19.64383,0.80267 -30.50133,14.9425 -30.50133,14.9425c0,0 -10.8575,-14.13983 -30.50133,-14.9425c-13.17233,-0.5375 -25.24817,6.02 -33.20317,16.5335c-27.67767,36.57867 24.725,79.37083 37.05167,90.859c7.3745,6.87283 16.47617,15.03567 21.9085,19.87317c2.71617,2.42233 6.76533,2.42233 9.4815,0c5.43233,-4.8375 14.534,-13.00033 21.9085,-19.87317c12.32667,-11.48817 64.7365,-54.28033 37.05167,-90.859c-7.94783,-10.5135 -20.02367,-17.071 -33.196,-16.5335z"></path></g></g></svg>
            {postData.likes}
          </p>
        </div>

        <Blurhash 
          hash={postData.blur_hash}
          style={{
            display: `${!showImage ? 'block' : 'none'}`
          }}
          height='100%' 
          width='100%'
        />
        
        <img
          style={{
            display: `${showImage ? 'block' : 'none'}`
          }}
          src={postData.url}
          alt=''
          onLoad={imageOnLoad}
        />
      </div>
    </>
  );
};

type propsDataType = {
  postData: postDataType,
  onClickHandler: (arg0: string) => void,
}

export default React.memo(GridPost);
