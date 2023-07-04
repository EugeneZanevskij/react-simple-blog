import { useContext } from 'react';
import PostItem from './PostItem';
import { AppContext } from '../contexts/AppState';

const PostList = () => {
  const { posts } = useContext(AppContext);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;