import ProfilePage from "./ProfilePage.png";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile">
      <img src={ProfilePage.png}></img>
      <h1>Jordan Walker</h1>
      <h2>React Creator</h2>
      <p>Lorem Ipsem</p>
    </div>
  );
};

export default UserProfile;
