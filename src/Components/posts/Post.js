import "./posts.css"


const Post = ({ title, description }) => {
  return (
    <div
      className="posts">
      <h5 className="posts-title">
        {title}
      </h5>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Post;