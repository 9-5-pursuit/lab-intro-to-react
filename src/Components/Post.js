import React from "react";
import Posts from "./Posts";

function Post() {
  return (
    <div>
      <p>{Posts.title}</p>

      <p>{Posts.description}</p>
    </div>
  );
}
export default Post;
