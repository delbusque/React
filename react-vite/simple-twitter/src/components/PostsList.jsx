import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.text} author={post.author} text={post.text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
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
    </>
  );
};

export default PostsList;
