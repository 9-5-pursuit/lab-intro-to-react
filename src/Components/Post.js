import React from "react";
import Posts from "./Posts";

function Post() {
  console.log(Posts);

  return (
    <div>
      <p>{Posts.title}</p>

      <p>{Posts.description}</p>
    </div>
  );
}
export default Post;
