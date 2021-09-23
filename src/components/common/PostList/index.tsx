import React, { useState, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ThemeContext } from '../../../App';
import { postDataType } from '../../../types';
import Post from '../Post';

import './postList.css';

const PostList = ({
  postsData, 
  loadMore, 
  hasMore, 
  selectedPostId}: propsDataType
) => {
  const currentTheme = useContext(ThemeContext);
  
  const [pageNumber, setPageNumber] = useState(2);
  
  return (
    <InfiniteScroll
      dataLength={postsData.length}
      next={() => {
        setPageNumber(pageNumber + 1)
        loadMore(pageNumber)
      }}
      hasMore={hasMore === undefined ? true : hasMore}
      loader={
        <div className='postList03LoaderContainer'>
          <svg aria-label='Loading...' viewBox='0 0 100 100'><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0' rx='3' ry='3' transform='rotate(-90 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.08333333333333333' rx='3' ry='3' transform='rotate(-60 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.16666666666666666' rx='3' ry='3' transform='rotate(-30 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.25' rx='3' ry='3' transform='rotate(0 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.3333333333333333' rx='3' ry='3' transform='rotate(30 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.4166666666666667' rx='3' ry='3' transform='rotate(60 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.5' rx='3' ry='3' transform='rotate(90 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.5833333333333334' rx='3' ry='3' transform='rotate(120 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.6666666666666666' rx='3' ry='3' transform='rotate(150 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.75' rx='3' ry='3' transform='rotate(180 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.8333333333333334' rx='3' ry='3' transform='rotate(210 50 50)' width='25' x='72' y='47'></rect><rect fill={`${currentTheme === 'light' ? '#555555' : '#d1d1d1'}`} height='6' opacity='0.9166666666666666' rx='3' ry='3' transform='rotate(240 50 50)' width='25' x='72' y='47'></rect></svg>
        </div>
      }        
    >
      {postsData.map((post: postDataType) => (
        <div className='postList03PostContainer' key={post.id}>
          <Post postData={post} selectedPostId={selectedPostId} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

type propsDataType = {
  postsData: postDataType[];
  loadMore: (arg0: number) => void;
  hasMore?: boolean;
  selectedPostId?: string;
};

export default React.memo(PostList);
