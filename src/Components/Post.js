import React from "react";

function Post(props) {
  const { title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>Lorem Ipsem</p>
    </div>
  );
}

export default Post;
