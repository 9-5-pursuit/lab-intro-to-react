import React from "react";
import Post from "./Post";

//This is the child element of App.js

function Posts() {
  return (
    <div id="posts">
      <h2>Posts</h2>

      <div id="indv-post">
        <h3>Title</h3>
        <h4>Lorem Ipsem</h4>
      </div>
      <div id="indv-post">
        <h3>Title</h3>
        <h4>Lorem Ipsem</h4>
      </div>
      <div id="indv-post">
        <h3>Title</h3>
        <h4>Lorem Ipsem</h4>
      </div>
    </div>
  );
}

export default Posts;
