import React from "react";
import Post from "./Post";

// This is a child
function Posts() {
  return (
    <>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default Posts;
