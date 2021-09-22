import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PostList from '../../components/common/PostList';

import { getTimelinePosts } from '../../store/actions/timelineActions';
import { useAppSelector } from '../../store/hooks';

import './timelinePage.css';

const TimelinePage = () => {
  const dispatch = useDispatch();
  const { timelinePosts, isError } = useAppSelector(state => state.timelineData);

  useEffect(() => {
    dispatch(getTimelinePosts(1));
  }, [])
  
  return (
    <>
      <main className='timelinePage03OuterContainer'>
        {isError ? (
          <h6 className='ErrorMessage'>
            Some network error occurred.
            <br /> 
            Please refresh
          </h6>
        ) : (
          <PostList 
            postsData={timelinePosts} 
            loadMore={(pageNumber) => dispatch(getTimelinePosts(pageNumber))}
          />
        )}
      </main>
    </>
  );
};

export default TimelinePage;
