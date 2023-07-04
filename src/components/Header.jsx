import { useState } from 'react';
import AddPost from './AddPost';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header>
      <h1>DevBlog</h1>
      <button onClick={() => setOpenModal(!openModal)}>Create Post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;