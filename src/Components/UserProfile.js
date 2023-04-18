import "./UserProfile.css";
function UserProfile() {
  return (
    <div id="user">
      <img
        id="user-pic"
        rel="profile"
        alt="profile-pic"
        src="../../public/profile.png"
      ></img>
      <p id="user1">
        <strong>Jordan Walke</strong>
      </p>
      <p id="user2">
        <strong>React Creator</strong>
      </p>
      <p id="user3">Loren Ipsem</p>
    </div>
  );
}
export default UserProfile;
