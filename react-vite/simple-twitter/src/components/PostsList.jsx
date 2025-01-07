import NewPost from "./NewPost.jsx";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

const PostsList = ({ hideNewPost, isModalVisible }) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeTextHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  return (
    <>
      {isModalVisible ? (
        <Modal hideModal={hideNewPost}>
          <NewPost
            enteredText={enteredText}
            enteredAuthor={enteredAuthor}
            onBodyChange={changeTextHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} text={enteredText} />
        <Post author="Max" text="JS is awesome !" />
      </ul>
    </>
  );
};

export default PostsList;
