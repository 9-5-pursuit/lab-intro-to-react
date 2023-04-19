import React from "react";

const data = {
  title: "Title",
  info: "Lorem Ipsem",
};

function Post() {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.info}</p>
    </div>
  );
}

export default Post;
