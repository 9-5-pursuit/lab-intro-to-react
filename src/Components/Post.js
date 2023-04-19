import React from "react";

const postData = {
  title: "Title",
  description: "Lorem Ipsum",
};

function Post() {
  return (
    <div className="Post">
      <h3>{postData.title}</h3>
      <p>{postData.description}</p>
    </div>
  );
}

export default Post;
