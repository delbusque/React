import NewPost from "./NewPost.jsx";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostsList = ({ hideNewPost, isModalVisible }) => {
  return (
    <>
      {isModalVisible ? (
        <Modal hideModal={hideNewPost}>
          <NewPost hideModal={hideNewPost} />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        <Post author="Max" text="JS is awesome !" />
      </ul>
    </>
  );
};

export default PostsList;
