import './postList.css';

import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { postDataType } from '../../../types';
import Post from '../Post';

const PostList = ({
  postsData, loadMore, hasMore}: {postsData: postDataType[], loadMore: (arg0: number) => void, hasMore?: boolean}
) => {
  const [pageNumber, setPageNumber] = useState(2);
  return (
    <InfiniteScroll
      dataLength={postsData.length}
      next={() => {
        setPageNumber(pageNumber + 1)
        loadMore(pageNumber)
      }}
      hasMore={hasMore === undefined ? true : hasMore}
      loader={<small><b>Loading...</b></small>}        
      >
      {(postsData as postDataType[]).map((post: postDataType) => (
        <div className='postList03PostContainer' key={post.id}>
          <Post postData={post} />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
