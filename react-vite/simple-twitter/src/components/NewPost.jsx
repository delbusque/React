import { useState } from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ hideModal, addPostData }) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const changeTextHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      text: enteredText,
      author: enteredAuthor,
    };
    addPostData(postData);
    hideModal();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={hideModal}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
