import Post from "./Post";
import React from "react";
import "./Posts.css";

const Posts = () => {
  return (
    <section className="Posts">
      <h2>Posts</h2>
      <Post title="First Post" description="Lorem Ipsem" />
      <Post title="Second Post" description="Lorem Ipsem" />
      <Post title="Third Post" description="Lorem Ipsem" />
    </section>
  );
};

export default Posts;
