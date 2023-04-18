const postData = {
  title: "The Pressure",
  description:
    "No Matter How Powerful You Become, Don't Try To Shoulder Everything Alone. If You Do, You Will Surely Fail.",
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
