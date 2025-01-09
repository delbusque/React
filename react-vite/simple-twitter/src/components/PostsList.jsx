import { useState, useEffect } from "react";
import NewPost from "../routes/NewPost.jsx";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostsList = ({ hideNewPost, isModalVisible }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    };
    fetchPosts();
  }, []);

  const postDataHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    setPosts((oldPosts) => [postData, ...oldPosts]);
  };

  return (
    <>
      {isModalVisible ? (
        <Modal hideModal={hideNewPost}>
          <NewPost hideModal={hideNewPost} addPostData={postDataHandler} />
        </Modal>
      ) : null}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={Math.random() * 1000}
              author={post.author}
              text={post.text}
            />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <h3>There are no posts yet.</h3>
          <p>Could add some!</p>
        </div>
      )}
      {isFetching && (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <p>Loading posts... </p>
        </div>
      )}
    </>
  );
};

export default PostsList;
