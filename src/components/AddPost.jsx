import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppState';

const AddPost = ({ closeModal, post }) => {
  const { addPost, updatePost } = useContext(AppContext);
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError('All fields are required');

    post ? updatePost({ id: post.id, title, body }) : addPost({ title, body });
    closeModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder='Enter body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddPost;