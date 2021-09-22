import './timelinePage.css';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import PostList from '../../components/common/PostList';
import { getTimelinePosts } from '../../store/actions/timelineActions';
import { useAppSelector } from '../../store/hooks';

const TimelinePage = () => {
  const dispatch = useDispatch();
  const { timelinePosts } = useAppSelector(state => state.timelineData);
  useEffect(() => {
    dispatch(getTimelinePosts(1));
  }, [])
  
  return (
    <>
      <main className='timelinePage03OuterContainer'>
        <PostList postsData={timelinePosts} loadMore={(pageNumber) => dispatch(getTimelinePosts(pageNumber))}/>
      </main>
    </>
  );
};

export default TimelinePage;
