import NewPost from "./NewPost.jsx";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

const PostsList = () => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const changeTextHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const backdropClickHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible ? (
        <Modal hideModal={backdropClickHandler}>
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
