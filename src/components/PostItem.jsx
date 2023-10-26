import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppState";
import AddPost from "./AddPost";

const PostItem = ({ post }) => {
  const { deletePost } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <i className='fas fa-edit' onClick={() => setOpenModal(!openModal)}></i>
        <i className='fas fa-trash' onClick={() => deletePost(post.id)}></i>
        {openModal && <AddPost closeModal={closeModal} post={post}/>}
      </div>
    </li>
  );
};

export default PostItem;