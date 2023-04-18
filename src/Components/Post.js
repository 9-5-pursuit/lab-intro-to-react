// no div around the 3 elements but around each strong & p tag section only
import "./Post.css";
function Post() {
  return (
    <>
      <div id="post1">
        <strong>Title</strong>
        <p id="post-p1">Loren Ipsem </p>
      </div>

      <div id="post2">
        <strong>Title</strong>
        <p id="post-p2">Loren Ipsem</p>
      </div>

      <div id="post3">
        <strong>Title</strong>
        <p id="post-p3">Loren Ipsem</p>
      </div>
    </>
  );
}
export default Post;
