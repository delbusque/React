import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const backdropClickHandler = () => {
    setIsModalVisible(false);
  };

  const createPostHandler = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={createPostHandler} />
      <main>
        <PostsList
          isModalVisible={isModalVisible}
          hideNewPost={backdropClickHandler}
        />
      </main>
    </>
  );
}

export default App;
