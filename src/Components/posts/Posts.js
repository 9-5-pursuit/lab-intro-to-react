
import Post from "./Post";

import { posts } from "../../dummyData"

const Posts = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      {
        posts.map((post, index) => <Post key={index} {...post} />)
      }
    </div>
  );
};

export default Posts;