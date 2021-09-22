import {
  useEffect,
  useState,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';

import PostList from '../../../components/common/PostList';
import GridPost from '../GridPost';

import { getUserPosts } from '../../../store/actions/profileActions';
import { useAppSelector } from '../../../store/hooks';

import './userPosts.css';

const UserPosts = ({ username }: {username: string}) => {
  const [gridPageNumber, setGridPageNumber] = useState(2);
  const [activeTab, setActiveTab] = useState(1);

  const dispatch = useDispatch();
  const { userProfile, userPosts } = useAppSelector(state => state.profileData);

  useEffect(() => {
    dispatch(getUserPosts(username, 1));
  }, [])

  const selectTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tabId: number) => {
    e.preventDefault();
    setActiveTab(tabId);
  }

  return (
    <>
      <div className='userPosts06OuterContainer'>
        <div className='userPosts06SelectorContainer'>
          <button className='userPosts06Selector' data-selected={activeTab === 0} onClick={(e) => { selectTab(e, 0) }}>
          <svg aria-label="" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
            GRID
          </button>
          <button className='userPosts06Selector' data-selected={activeTab === 1} onClick={(e) => { selectTab(e, 1) }}>
          <svg aria-label="" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg>            TIMELINE
          </button>
        </div>

        <div className='userPosts06ContentContainer'>
          {activeTab === 0 ? (
            <InfiniteScroll
              dataLength={userPosts.length}
              next={() => {
                setGridPageNumber(gridPageNumber + 1)
                dispatch(getUserPosts(username, gridPageNumber))
              }}
              hasMore={userProfile.total_photos === null || userProfile.total_photos > userPosts.length}
              loader={
                <div className='postList03LoaderContainer'>
                  <svg aria-label="Loading..." viewBox="0 0 100 100"><rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"></rect></svg>
                </div>
              }        
            >
              <div className='userPosts06GridContainer'>
                {userPosts.map((post, index) => (
                  <GridPost key={index} url={post.url} blurHash={post.blur_hash} likes={post.likes}/>
                ))}
              </div>
            </InfiniteScroll>           
          ) : (
            <PostList 
              postsData={userPosts} 
              loadMore={(pageNumber) => dispatch(getUserPosts(username, pageNumber))} 
              hasMore={userProfile.total_photos === null || userProfile.total_photos > userPosts.length}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserPosts;
